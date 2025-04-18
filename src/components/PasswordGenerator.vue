<template>
  <div class="w-full max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
    <h1 class="text-2xl font-bold text-center mb-6">Random Password Generator</h1>
    
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Password Length: {{ passwordLength }}</label>
        <input 
          type="range" 
          min="4" 
          max="32" 
          v-model="passwordLength" 
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      
      <div class="grid grid-cols-2 gap-2">
        <div class="flex items-center">
          <input 
            type="checkbox" 
            id="uppercase" 
            v-model="includeUppercase" 
            class="w-4 h-4 mr-2"
          />
          <label for="uppercase" class="text-sm">Uppercase (A-Z)</label>
        </div>
        <div class="flex items-center">
          <input 
            type="checkbox" 
            id="lowercase" 
            v-model="includeLowercase" 
            class="w-4 h-4 mr-2"
          />
          <label for="lowercase" class="text-sm">Lowercase (a-z)</label>
        </div>
        <div class="flex items-center">
          <input 
            type="checkbox" 
            id="numbers" 
            v-model="includeNumbers" 
            class="w-4 h-4 mr-2"
          />
          <label for="numbers" class="text-sm">Numbers (0-9)</label>
        </div>
        <div class="flex items-center">
          <input 
            type="checkbox" 
            id="symbols" 
            v-model="includeSymbols" 
            class="w-4 h-4 mr-2"
          />
          <label for="symbols" class="text-sm">Symbols (!@#$)</label>
        </div>
      </div>
      
      <button 
        @click="generatePassword" 
        class="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Generate Password
      </button>
      
      <div v-if="generatedPassword" class="mt-4">
        <div class="flex mb-2">
          <input 
            type="text" 
            readonly 
            :value="generatedPassword" 
            class="flex-1 border rounded-l-lg p-2 bg-gray-50 focus:outline-none"
          />
          <button 
            @click="copyToClipboard" 
            class="bg-gray-200 hover:bg-gray-300 px-4 rounded-r-lg flex items-center"
          >
            <span class="i-carbon-copy text-lg"></span>
          </button>
        </div>
        
        <div class="mb-2">
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              :class="strengthColor" 
              :style="{ width: `${passwordStrength}%` }"
              class="h-2.5 rounded-full"
            ></div>
          </div>
        </div>
        
        <p class="text-sm text-gray-600">
          Password Strength: 
          {{
            passwordStrength < 30 ? 'Weak' : 
            passwordStrength < 60 ? 'Fair' : 
            passwordStrength < 80 ? 'Good' : 'Strong'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const passwordLength = ref(12);
const includeUppercase = ref(true);
const includeLowercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const generatedPassword = ref('');

const passwordStrength = computed(() => {
  if (!generatedPassword.value) return 0;
  
  let strength = 0;
  
  // Length adds strength
  strength += Math.min(passwordLength.value / 8, 1) * 25;
  
  // Character types add strength
  if (includeUppercase.value) strength += 25;
  if (includeLowercase.value) strength += 25;
  if (includeNumbers.value) strength += 25;
  if (includeSymbols.value) strength += 25;
  
  // Cap at 100%
  return Math.min(strength, 100);
});

const strengthColor = computed(() => {
  const strength = passwordStrength.value;
  if (strength < 30) return 'bg-red-500';
  if (strength < 60) return 'bg-yellow-500';
  if (strength < 80) return 'bg-blue-500';
  return 'bg-green-500';
});

function generatePassword() {
  let charset = '';
  if (includeLowercase.value) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase.value) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers.value) charset += '0123456789';
  if (includeSymbols.value) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  if (charset === '') {
    generatedPassword.value = '';
    return;
  }
  
  let result = '';
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  
  generatedPassword.value = result;
}

function copyToClipboard() {
  if (!generatedPassword.value) return;
  
  navigator.clipboard.writeText(generatedPassword.value)
    .then(() => {
      alert('Password copied to clipboard!');
    })
    .catch((err) => {
      console.error('Failed to copy password: ', err);
    });
}
</script> 