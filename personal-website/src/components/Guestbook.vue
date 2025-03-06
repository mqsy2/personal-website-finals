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

<style scoped>
/* Dark Theme Colors (Alignments Unchanged) */
.guestbook {
  background: #222; /* Dark background */
  color: white; /* Light text */
}

h2, h3 {
  color: white;
}

/* Input Fields */
input, textarea {
  background: #333;
  color: white;
  border: 1px solid #444;
}

/* Button */
button {
  background: #0070f3;
  color: white;
}

button:hover {
  background: #005bb5;
}

/* Message List */
li {
  background: #333;
  color: white;
}
</style>
