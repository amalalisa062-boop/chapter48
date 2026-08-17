/*
  CHAPTER 48 — وضع قريباً لقسم الأدلة (إصدار متوافق مع تحميل React المتأخر).
  لإعادة القسم كما كان: احذف أو عطّل سطر تحميل هذا الملف من index.html.
*/
(function () {
  function activateComingSoon() {
    const library = document.getElementById("library");
    if (!library) return false;

    const guidesGrid = library.querySelector(".grid");
    if (!guidesGrid || document.getElementById("guides-coming-soon-notice")) return false;

    guidesGrid.hidden = true;

    const notice = document.createElement("div");
    notice.id = "guides-coming-soon-notice";
    notice.setAttribute("role", "status");
    notice.style.cssText = [
      "max-width:48rem", "margin:0 auto", "padding:3.5rem 1.5rem",
      "border:1px solid #e2e8f0", "border-radius:1.5rem", "background:#ffffff",
      "box-shadow:0 10px 25px rgba(15,23,42,.06)", "text-align:center", "font-family:inherit"
    ].join(";");
    notice.innerHTML = `
      <div style="width:4rem;height:4rem;margin:0 auto 1.25rem;display:grid;place-items:center;border:1px solid #a7f3d0;border-radius:1rem;background:#ecfdf5;color:#047857;font-size:1.75rem;line-height:1;">⌛</div>
      <span style="display:inline-block;margin-bottom:1rem;padding:.4rem 1rem;border:1px solid #a7f3d0;border-radius:999px;background:#ecfdf5;color:#047857;font-size:.9rem;font-weight:700;">قريباً</span>
      <h3 style="margin:0 0 .75rem;color:#0f172a;font-size:clamp(1.5rem,4vw,2rem);font-weight:800;">المكتبة الرقمية قيد التجهيز</h3>
      <p style="max-width:38rem;margin:0 auto;color:#475569;font-size:1rem;line-height:1.9;">نعمل على مراجعة الأدلة وتحديثها لتصل إليكم بصورة منظمة ومتكاملة. ستُتاح جميع المواد المعتمدة هنا قريباً.</p>
    `;
    guidesGrid.before(notice);
    return true;
  }

  const stopAt = Date.now() + 15000;
  const timer = setInterval(function () {
    if (activateComingSoon() || Date.now() >= stopAt) clearInterval(timer);
  }, 150);
})();
