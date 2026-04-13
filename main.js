async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  const endpoint = form.dataset.endpoint;
  const originalText = btn.textContent;
  const formData = new FormData(form);

  formData.append('pageUrl', window.location.href);

  btn.textContent = '正在提交...';
  btn.disabled = true;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      mode: 'cors'
    });

    const result = await response.json();

    if (response.ok && result.ok) {
      btn.textContent = '已提交，我们会尽快查看';
      form.reset();
      return;
    }

    throw new Error(result.message || '提交失败');
  } catch (error) {
    btn.textContent = '提交失败，请稍后再试';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2500);
  }
}
