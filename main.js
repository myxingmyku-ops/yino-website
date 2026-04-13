function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '已收到，我们会先进行项目判断';
  btn.disabled = true;
}
