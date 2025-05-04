<template>
  <div class="settings-container">
    <h1 class="text-2xl font-bold mb-4">Settings</h1>
    <form class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input id="username" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter your username" >
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" type="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter your email" >
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input id="password" type="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter your password" >
      </div>
      <div>
        <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
.settings-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
</style>