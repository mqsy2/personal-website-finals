<template>
  <div class="about">
    <div class="profile">
      <img src="https://raw.githubusercontent.com/mqsy2/personal-website-finals/main/images/472067468_1142773223985589_5416666476238467940_n.jpg" alt="Profile Picture" />
      <h1>Hi, I'm Moises James Q. Sy 👋</h1>
      <p>
        I'm a passionate [Your Profession or Hobby] who loves to create and explore new technologies.
        Welcome to my personal website!
      </p>
    </div>

    <div class="section">
      <h2>💡 Skills & Expertise</h2>
      <ul>
        <li>Frontend Development (Vue.js, React, HTML, CSS, JavaScript)</li>
        <li>Backend Development (Supabase)</li>
        <li>UI/UX Design (Figma, Adobe)</li>
        <li>Linux & Virtualization (VirtualBox, Ubuntu)</li>
        <li>Animation(NC II certificate)</li>
      </ul>
    </div>

    <div class="section">
      <h2>🎯 Interests & Hobbies</h2>
      <ul>
        <li>🖥️ Building Comuters</li>
        <li>🎨 Animation</li>
        <li>📸 Photography & Digital Art</li>
        <li>🎮 Playing video games</li>
        <li>🧳 Traveling & experiencing new cultures</li>
      </ul>
    </div>

    <div class="section">
      <h2>📬 Get in Touch</h2>
      <p>I'm always open to new opportunities, collaborations, or just a friendly chat.</p>
      <p>Email: <a href="mqsy2@student.apc.edu.ph">mqsy2@student.apc.edu.ph</a></p>
      <p>GitHub: <a href="https://github.com/mqsy2" target="_blank">https://github.com/mqsy2</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/moises-james-sy-46210928a/" target="_blank">https://www.linkedin.com/in/moises-james-sy-46210928a/</a></p>
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