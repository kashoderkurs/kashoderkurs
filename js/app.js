document.addEventListener('DOMContentLoaded', function() {
  var cash = document.querySelector('#cash');
  var rate = document.querySelector('#rate');
  var weight = document.querySelector('#weight');
  var tenner = document.querySelector('button');
  var radios = document.querySelector('#radios');

  var cashInput = function() {
    var value = cash.value;
    var rateValue = rate.value;
    var weightValue = weight.value;

    weight.value = (value / rateValue).toFixed(1);
  }

  cash.addEventListener('input', cashInput);

  rate.addEventListener('input', function() {
    var value = this.value;
    var cashValue = cash.value;
    var weightValue = weight.value;

    weight.value = (cashValue / value).toFixed(1);
  });

  weight.addEventListener('input', function() {
    var value = this.value;
    var rateValue = rate.value;
    var cashValue = cash.value;

    var radio = document.querySelector('input:checked').value;

    if (radio == 'cash') {
      var newCashValue = (value * rateValue).toFixed(2);
      if (newCashValue.match(/.00/)) {
        newCashValue = parseInt(newCashValue);
      }

      cash.value = newCashValue;
    }
    else if (radio == 'rate') {
      rate.value = (cashValue / value).toFixed(2);
    }
  });

  weight.addEventListener('focus', function() {
    radios.classList.add('active');
  });

  weight.addEventListener('blur', function() {
    radios.classList.remove('active');
  });

  tenner.addEventListener('click', function(e) {
    cash.value = 10;
    cashInput();

    e.preventDefault();
  });
});
