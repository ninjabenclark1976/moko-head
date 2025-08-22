import { createClient } from '@supabase/supabase-js';
import mesh from '../config/mesh.json';

const supabase = createClient(mesh.supabaseUrl, mesh.supabaseKey);

function addMessage(sender, text) {
  const div = document.createElement('div');
  div.innerHTML = "<b>" + sender + ":</b> " + text;
  document.getElementById('chat').appendChild(div);
}

async function sendCommand() {
  const cmd = document.getElementById('command').value;
  addMessage("You", cmd);

  // Log event to Supabase mesh
  await supabase.from('bounce_events').insert([{ sender: "Ben", command: cmd }]);

  // Placeholder response until bounce cycle returns
  setTimeout(() => { addMessage("Moko", "I received: " + cmd); }, 1000);
}

function restoreHead() {
  fetch('/guardian/recovery.js');
}
