<template>
  <div class="about">
    <div class="profile">
      <img src="https://via.placeholder.com/150" alt="Profile Picture" />
      <h1>Hi, I'm [Your Name] 👋</h1>
      <p>
        I'm a passionate [Your Profession or Hobby] who loves to create and explore new technologies.
        Welcome to my personal website!
      </p>
    </div>

    <div class="section">
      <h2>💡 Skills & Expertise</h2>
      <ul>
        <li>Frontend Development (Vue.js, React, HTML, CSS, JavaScript)</li>
        <li>Backend Development (Node.js, Express, Supabase, Firebase)</li>
        <li>UI/UX Design (Figma, Adobe XD)</li>
        <li>Linux & Virtualization (VirtualBox, Ubuntu, Bash Scripting)</li>
      </ul>
    </div>

    <div class="section">
      <h2>🎯 Interests & Hobbies</h2>
      <ul>
        <li>🚀 Exploring new technologies</li>
        <li>🎨 Designing user-friendly interfaces</li>
        <li>📸 Photography & Digital Art</li>
        <li>🎮 Playing video games</li>
        <li>🧳 Traveling & experiencing new cultures</li>
      </ul>
    </div>

    <div class="section">
      <h2>📬 Get in Touch</h2>
      <p>I'm always open to new opportunities, collaborations, or just a friendly chat.</p>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a></p>
    </div>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 40px;
  max-width: 800px;
  margin: auto;
  color: white;
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 3px solid #fff;
}

h1 {
  font-size: 32px;
  font-weight: bold;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.section {
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  font-size: 18px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: #4db8ff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>