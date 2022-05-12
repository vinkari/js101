let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
})

//Test
console.log(ladder);  // expect: head-heal-teal-tell-tall-tail