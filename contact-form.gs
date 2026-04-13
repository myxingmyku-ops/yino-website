function doPost(e) {
  try {
    const data = e && e.parameter ? e.parameter : {};
    const name = data.name || '未填写';
    const contact = data.contact || '未填写';
    const city = data.city || '未填写';
    const projectType = data.projectType || '未填写';
    const description = data.description || '未填写';
    const pageUrl = data.pageUrl || '未提供';
    const submittedAt = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

    const subject = '壹锘官网｜新的项目咨询';
    const body = [
      '你收到一条来自壹锘官网的新项目咨询。',
      '',
      '提交时间：' + submittedAt,
      '姓名：' + name,
      '联系方式：' + contact,
      '项目城市：' + city,
      '项目类型：' + projectType,
      '项目说明：',
      description,
      '',
      '来源页面：' + pageUrl
    ].join('\n');

    GmailApp.sendEmail('Myxingmyku@gmail.com', subject, body, {
      name: '壹锘官网表单',
      replyTo: 'Myxingmyku@gmail.com'
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'submitted' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
