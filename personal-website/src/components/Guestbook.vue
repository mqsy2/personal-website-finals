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

    <div v-if="messages.length" class="message-list">
      <h3>Messages</h3>
      <ul>
        <li v-for="msg in messages" :key="msg.id">
          <strong>{{ msg.name }}</strong>
          <p>{{ msg.message }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.guestbook {
  max-width: 400px;
  margin: auto;
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2, h3 {
  color: #333;
  font-weight: 600;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
}

textarea {
  resize: none;
  height: 80px;
}

button {
  padding: 10px;
  background: #0070f3;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #005bb5;
}

.message-list {
  margin-top: 20px;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 14px;
}

strong {
  color: #0070f3;
  display: block;
  margin-bottom: 5px;
}
</style>