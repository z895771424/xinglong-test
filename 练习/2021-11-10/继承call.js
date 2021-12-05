function fn() {
  console.log(this.name);
}

// fn()

const obj = {
  name:'兴隆'
}

fn.call(obj);