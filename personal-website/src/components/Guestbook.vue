<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";

const name = ref("");
const message = ref("");
const messages = ref([]);

const fetchMessages = async () => {
  let { data, error } = await supabase.from("guestbook").select("*").order("created_at", { ascending: false });
  if (!error) messages.value = data;
};

const submitMessage = async () => {
  if (!name.value || !message.value) return;
  let { error } = await supabase.from("guestbook").insert([{ name: name.value, message: message.value }]);
  if (!error) {
    name.value = "";
    message.value = "";
    fetchMessages();
  }
};

onMounted(fetchMessages);
</script>

<template>
  <div class="guestbook">
    <h2>Guestbook</h2>
    <form @submit.prevent="submitMessage">
      <input v-model="name" placeholder="Your Name" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Post</button>
    </form>

    <div v-if="messages.length">
      <h3>Messages:</h3>
      <ul>
        <li v-for="msg in messages" :key="msg.id">
          <strong>{{ msg.name }}</strong>: {{ msg.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.guestbook {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
input, textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  padding: 8px 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  cursor: pointer;
}
</style>