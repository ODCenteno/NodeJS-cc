const name = 'Daniel';

function gretting(name) {
  console.log(`Hello, ${name}`);
  goodbye(name);
}

function hello(name, gretting) {
  console.log('launching process...');

  setTimeout(function() { 
    gretting(name) }, 1000);
  
  return name;
}

function goodbye(name) {
  console.log('goodbye...')
  setTimeout(() => console.log('stoping process...'), 2000);
}

hello(name, gretting);