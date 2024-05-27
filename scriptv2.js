const faqData = [
    { question: '¿Cuál es el tiempo de entrega?', answer: 'El tiempo de entrega es de 3-5 días hábiles.' },
    { question: '¿Cómo puedo realizar un cambio?', answer: 'Puedes realizar un cambio contactándonos a través del formulario de contacto.' },
    { question: '¿Cuáles son los métodos de pago aceptados?', answer: 'Aceptamos tarjetas de crédito, transferencias bancarias y PayPal.' }
  ];
  
  const faqList = document.getElementById('faqList');
  const searchInput = document.getElementById('searchInput');
  
  function renderFAQs(faqs) {
    faqList.innerHTML = '';
    faqs.forEach(faq => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question', 'font-weight-bold', 'text-primary');
      questionDiv.textContent = faq.question;
      questionDiv.addEventListener('click', () => toggleAnswer(questionDiv.nextElementSibling));
      
      const answerDiv = document.createElement('div');
      answerDiv.classList.add('answer');
      answerDiv.textContent = faq.answer;
  
      faqList.appendChild(questionDiv);
      faqList.appendChild(answerDiv);
    });
  }
  
  function toggleAnswer(answerDiv) {
    answerDiv.classList.toggle('show');
  }
  
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredFAQs = faqData.filter(faq => faq.question.toLowerCase().includes(searchText));
    renderFAQs(filteredFAQs);
  });
  
  // Render initial FAQs
  renderFAQs(faqData);
  
  // Contact Form Submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('inputEmail').value.trim();
    const message = document.getElementById('inputMessage').value.trim();
    
    // Simulate sending email (replace with actual sending logic)
    console.log(`Email sent to: ${email}`);
    console.log(`Message: ${message}`);
  
    // Clear form fields
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessage').value = '';
  
    // Show success message (replace with actual feedback to the user)
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
  });
  