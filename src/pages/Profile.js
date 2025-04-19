import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [learning, setLearning] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nTeach: ${skills}\nLearn: ${learning}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Skills you can teach"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Skills you want to learn"
          value={learning}
          onChange={(e) => setLearning(e.target.value)}
        /><br /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
