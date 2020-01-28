  function getPrimes(number) {
      for (let i = 1; i <= number; i++) {
          if (i % 1 === 0 && i % i === 0) {
              console.log(i);
          }
      }
  }