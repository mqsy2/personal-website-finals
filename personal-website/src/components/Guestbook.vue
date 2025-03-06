<template>
  <div class="guestbook">
    <form @submit.prevent="submitMessage">
      <input v-model="name" placeholder="Your Name" required />
      <textarea v-model="message" placeholder="Write a comment" required></textarea>
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
/* Dark Theme Colors */
.guestbook {
  width: 90%;
  max-width: 400px;
  margin: 40px auto;
  text-align: center;
  background: #222; /* Dark background */
  color: white; /* Light text */
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

h2, h3 {
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Dark Input Fields */
input, textarea {
  width: 90%;
  background: #333;
  color: white;
  border: 1px solid #444;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;
}

textarea {
  resize: none;
  height: 120px;
}

/* Dark Button */
button {
  padding: 12px;
  background: #0070f3;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #005bb5;
}

/* Dark Messages Box */
.message-list {
  margin-top: 25px;
  text-align: left;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 5px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #333;
  color: white;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 12px;
  font-size: 15px;
}

strong {
  color: #1e90ff;
  display: block;
  margin-bottom: 5px;
}

/* Responsive Design */
@media (max-width: 600px) {
  .guestbook {
    width: 95%;
    max-width: none;
    padding: 20px;
  }

  textarea {
    height: 100px;
  }

  button {
    font-size: 14px;
    padding: 10px;
  }
}
</style>