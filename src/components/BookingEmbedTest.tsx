import { useEffect, useRef } from "react";

export default function BookingEmbedTest() {

  const formRef = useRef<Boolean>(false);

  const func = function () {
    var containerId = 'crown-booking-form-cmnne7s4q000004lddm244de2';
    var src = 'https://crown-dev-git-schedule-feature-stocktonmanges-projects.vercel.app/embed/booking-forms/cmnne7s4q000004lddm244de2';
    var container = document.getElementById(containerId);
    if (!container) return;
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.style.cssText = 'width:100%;border:none;border-radius:8px;display:block;';
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('allow', 'clipboard-write');
    iframe.setAttribute('title', 'Booking Form');
    iframe.height = '800';
    container.appendChild(iframe);
    formRef.current = true;

    window.addEventListener('message', function (e) {
      if (e.data && e.data.type === 'crown-booking-form-height' && e.data.publicKey === 'cmnne7s4q000004lddm244de2') {
        iframe.height = e.data.height;
      }
    });
  };

  useEffect(() => {
    if (!formRef.current) {
      func();
    }
  }, []);

  return (
    <section className="container p-3">
      <h1 className="text-center mb-3">Booking embed simple iframe</h1>
      <iframe
        src="https://crown-dev-git-schedule-feature-stocktonmanges-projects.vercel.app/embed/booking-forms/cmnne7s4q000004lddm244de2"
        width="100%"
        height="800"
        style={{ border: "none", borderRadius: 8 }}
        loading="lazy"
        allow="clipboard-write"
        title="Booking Form"
      ></iframe>

      <h1 className="text-center mb-3">Booking embed with div</h1>
      <div id="crown-booking-form-cmnne7s4q000004lddm244de2"></div>
    </section>
  );
}
