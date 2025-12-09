async function explainText() {
  const input = document.getElementById("inputText").value;
  const outputDiv = document.getElementById("output");

  if (!input.trim()) {
    outputDiv.innerHTML = "Please type something...";
    return;
  }

  outputDiv.innerHTML = "Thinking... 🤔";

  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer"
      },
      body: JSON.stringify({
        inputs: `Explain this in a very simple way like I'm 5 years old:\n\n${input}`
      })
    }
  );

  const data = await response.json();

  try {
    const answer = data[0].generated_text;
    outputDiv.innerHTML = answer;
  } catch (e) {
    outputDiv.innerHTML = "Error. Try again later.";
  }
}
