function handleSubmit(e) {
  const form = e.target;
  const btn = form.querySelector('button');
  btn.textContent = '正在提交...';
  btn.disabled = true;
}
