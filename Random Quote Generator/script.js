
const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Do what you can, with what you have, where you are. - Theodore Roosevelt",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "Act as if what you do makes a difference. It does. - William James",
      "It always seems impossible until it’s done. - Nelson Mandela",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "The best way to predict the future is to create it. - Peter Drucker",
      "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
      "Dream big and dare to fail. - Norman Vaughan",
      "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
      "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
      "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
      "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
      "A journey of a thousand miles begins with a single step. - Lao Tzu",
      "Don’t count the days, make the days count. - Muhammad Ali",
      "Doubt kills more dreams than failure ever will. - Suzy Kassem",
      "It does not matter how slowly you go as long as you do not stop. - Confucius",
      "Opportunities don’t happen. You create them. - Chris Grosser",
      "Everything you’ve ever wanted is on the other side of fear. - George Addair",
      "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
      "Be yourself; everyone else is already taken. - Oscar Wilde",
      "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie"
  ];

function generate()
{
      let randomNumber = Math.floor(Math.random() * 26);
      

      
      document.getElementById("kesava").innerHTML = quotes[randomNumber]
}
