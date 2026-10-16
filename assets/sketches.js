(() => {
  "use strict";

  const lineFrames = [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }];
  const draw = (part, delay, duration, easing = "ease-out") => ({
    selector: `[data-pen="${part}"]`, ink: true, frames: lineFrames, delay, duration, easing
  });
  const gesture = (part, delay, duration, frames) => ({
    selector: `[data-part="${part}"]`, frames, delay, duration, easing: "ease-in-out"
  });
  const reveal = (part, delay, duration = 180) =>
    gesture(part, delay, duration, [{ opacity: 0 }, { opacity: 1 }]);
  const follow = (part, line, delay, approach, writing, retreat) => ({
    selector: `[data-part="${part}"]`, line: `[data-pen="${line}"]`,
    delay, approach, writing, retreat, duration: approach + writing + retreat, easing: "linear"
  });

  // 每幅图自行描述内容顺序；细节在主体完成后出现，共享绘制、显现与物件运动
  const sequences = {
    connection: [
      draw("phone", 0, 620), draw("server", 240, 660), draw("prompt", 680, 300),
      reveal("phone-details", 620), reveal("phone-output", 980), reveal("server-details", 900),
      draw("link", 1000, 1200), reveal("link-label", 2000), reveal("light", 2200, 420)
    ],
    history: [
      draw("paper", 0, 420), draw("axes", 420, 430),
      reveal("paper-fold", 420), reveal("paper-ground", 420), reveal("grid", 850),
      draw("history", 850, 1400, "linear"), follow("point", "history", 850, 0, 1400, 0),
      gesture("point", 850, 1400, [{ opacity: 0, offset: 0 }, { opacity: 1, offset: .04 }, { opacity: 1, offset: 1 }])
    ],
    lens: [
      draw("glass", 0, 500), draw("value", 850, 650, "linear"),
      reveal("glass-details", 500),
      follow("glass", "value", 500, 350, 650, 450)
    ],
    operations: [
      draw("command", 0, 400), draw("ssh", 400, 1050), draw("containers", 1450, 750),
      reveal("ssh-label", 900), reveal("ssh-tip", 1450), reveal("container-details", 2200),
      draw("query", 2400, 450), draw("magnifier", 2600, 400)
    ],
    credentials: [
      draw("drawer", 0, 650), draw("handle", 650, 260), draw("key", 900, 700),
      reveal("drawer-details", 650), reveal("drawer-marks", 910), reveal("key-hole", 1600), reveal("key-rays", 1900),
      gesture("key", 850, 1050, [
        { transform: "translate(16px, -12px)", opacity: 0 }, { transform: "translate(0px, 0px)", opacity: 1 }
      ])
    ],
    community: [
      draw("sample", 0, 500), draw("prompt", 500, 300), draw("transfer", 850, 650),
      reveal("sample-fold", 500), reveal("paper-ground", 500), reveal("sample-output", 800),
      draw("note", 1550, 850, "linear"), follow("pencil", "note", 1200, 350, 850, 450)
    ],
    manual: [
      draw("book", 0, 650), draw("prompt", 650, 300), draw("bookmark", 950, 450),
      reveal("book-binding", 650), reveal("book-ground", 650), reveal("book-lines", 950), reveal("bookmark-mark", 1400),
      gesture("bookmark", 950, 700, [
        { transform: "translate(0px, -14px)", opacity: 0 }, { transform: "translate(0px, 0px)", opacity: 1 }
      ])
    ],
    direct: [
      draw("device", 0, 400), draw("server", 160, 440),
      reveal("device-detail", 400), reveal("server-detail", 600),
      draw("link", 660, 850, "linear"), reveal("arrow", 1510)
    ],
    bastion: [
      draw("device", 0, 360), draw("gateway", 360, 400),
      reveal("device-detail", 360), reveal("gateway-detail", 760),
      draw("first-link", 800, 500, "linear"), reveal("first-arrow", 1300),
      draw("server", 1000, 400), reveal("server-detail", 1400),
      draw("second-link", 1500, 600, "linear"), reveal("second-arrow", 2100)
    ],
    "local-forward": [
      draw("device", 0, 360), reveal("device-detail", 360),
      draw("server", 360, 400), reveal("server-detail", 760),
      draw("first-link", 800, 500, "linear"), reveal("first-arrow", 1300),
      draw("target", 1320, 400), reveal("target-detail", 1720),
      draw("second-link", 1740, 550, "linear"), reveal("second-arrow", 2290)
    ],
    "remote-forward": [
      draw("server", 0, 400), reveal("server-detail", 400),
      draw("device", 400, 360), reveal("device-detail", 760),
      draw("first-link", 820, 600, "linear"), reveal("first-arrow", 1420),
      draw("target", 1440, 400), reveal("target-detail", 1840),
      draw("second-link", 1860, 600, "linear"), reveal("second-arrow", 2460)
    ],
    "monitoring-history": [
      draw("chart", 0, 400), draw("details", 160, 400), reveal("clock", 400),
      draw("axes", 400, 400), reveal("detail-labels", 560), draw("readings", 760, 650),
      draw("trend", 900, 1300, "linear"), follow("marker", "trend", 900, 0, 1300, 0),
      gesture("marker", 900, 1300, [{ opacity: 0, offset: 0 }, { opacity: 1, offset: .04 }, { opacity: 1, offset: 1 }])
    ],
    "backup-guide": [
      draw("device", 0, 400), reveal("device-detail", 400), draw("source-paper", 400, 260),
      draw("source-lock", 660, 400), draw("cloud", 550, 450), draw("folder", 1000, 400),
      draw("transfer", 1450, 700, "linear"), reveal("arrow", 2150),
      follow("copy", "transfer", 1450, 0, 700, 300),
      gesture("copy", 1450, 1000, [{ opacity: 0, offset: 0 }, { opacity: 1, offset: .12 }, { opacity: 1, offset: 1 }])
    ],
    "lens-guide": [
      draw("output", 0, 320), reveal("output-lines", 320), draw("value", 320, 400, "linear"),
      draw("underline", 720, 200), reveal("text-tap", 920, 160),
      draw("open", 1080, 220, "linear"), reveal("open-arrow", 1300),
      draw("actions", 1300, 320), reveal("action-lines", 1620),
      draw("choice", 1800, 260), reveal("action-tap", 2060, 160),
      draw("query", 2220, 230, "linear"), reveal("query-arrow", 2450),
      draw("result", 2450, 350), reveal("result-lines", 2800)
    ],
    privacy: [
      draw("paper", 0, 520), draw("lines", 520, 650), draw("key", 1170, 650),
      reveal("paper-fold", 520), reveal("paper-footer", 1170), reveal("key-hole", 1820), reveal("key-rays", 2150),
      gesture("key", 1100, 1050, [
        { transform: "translate(18px, 10px)", opacity: 0 }, { transform: "translate(0px, 0px)", opacity: 1 }
      ])
    ],
    terms: [
      draw("paper", 0, 500), draw("lines", 500, 650),
      reveal("paper-fold", 500), reveal("paper-ground", 500), reveal("witness", 1150),
      draw("signature", 1500, 1000, "linear"), follow("pencil", "signature", 1150, 350, 1000, 500)
    ]
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pending = new Set(document.querySelectorAll(".animated-sketch"));
  const playbacks = new Map();

  function finishPlayback(sketch, run) {
    if (playbacks.get(sketch) !== run) return;
    playbacks.delete(sketch);
    for (const animation of run) animation.cancel();
  }

  function finishAllPlaybacks() {
    for (const [sketch, run] of playbacks) finishPlayback(sketch, run);
  }

  function tracingFrames(actor, line, step) {
    const length = line.getTotalLength();
    const end = line.getPointAtLength(length);
    const anchorX = actor.dataset.anchorX === undefined ? end.x : Number(actor.dataset.anchorX);
    const anchorY = actor.dataset.anchorY === undefined ? end.y : Number(actor.dataset.anchorY);
    const frames = [];
    if (step.approach) frames.push({ transform: "translate(0px, 0px)", offset: 0, easing: "ease-in-out" });
    // 只在入场时采样真实 SVG 笔迹，帧间运动交给浏览器，不建立逐帧 JavaScript 循环
    for (let sample = 0; sample <= 32; sample++) {
      const fraction = sample / 32;
      const point = line.getPointAtLength(length * fraction);
      frames.push({
        transform: `translate(${point.x - anchorX}px, ${point.y - anchorY}px)`,
        offset: (step.approach + step.writing * fraction) / step.duration,
        easing: sample === 32 && step.retreat ? "ease-in-out" : "linear"
      });
    }
    if (step.retreat) frames.push({ transform: "translate(0px, 0px)", offset: 1 });
    return frames;
  }

  function playDrawing(sketch) {
    const sequence = sequences[sketch.dataset.sketch];
    const steps = sequence.flatMap(step => {
      const target = sketch.querySelector(step.selector);
      if (step.ink && target.localName === "g") {
        const strokes = [...target.querySelectorAll("path[pathLength]")];
        const lengths = strokes.map(stroke => stroke.getTotalLength());
        const total = lengths.reduce((sum, length) => sum + length, 0);
        let elapsed = 0;
        // 独立落笔按真实长度分配时间，避免复合路径的多段笔画同时显现
        return strokes.map((stroke, index) => {
          const duration = index === strokes.length - 1
            ? step.duration - elapsed : step.duration * lengths[index] / total;
          const options = { duration, delay: step.delay + elapsed, easing: step.easing, fill: "backwards" };
          elapsed += duration;
          return { target: stroke, frames: step.frames, options };
        });
      }
      return [{
        target, frames: step.line ? tracingFrames(target, sketch.querySelector(step.line), step) : step.frames,
        options: { duration: step.duration, delay: step.delay, easing: step.easing, fill: "backwards" }
      }];
    });
    const run = [], completions = [];
    playbacks.set(sketch, run);
    try {
      for (const step of steps) {
        const animation = step.target.animate(step.frames, step.options);
        run.push(animation);
        completions.push(animation.finished);
      }
    } catch (error) {
      Promise.all(completions).catch(() => {});
      finishPlayback(sketch, run);
      throw error;
    }
    Promise.all(completions).then(
      () => finishPlayback(sketch, run),
      reason => {
        finishPlayback(sketch, run);
        if (reason.name !== "AbortError") throw reason;
      }
    );
  }

  function updateMotionPreference() {
    for (const sketch of pending) {
      if (reducedMotion.matches) sketch.removeAttribute("data-drawing");
      else sketch.dataset.drawing = "pending";
    }
    if (reducedMotion.matches) finishAllPlaybacks();
  }

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < .5 || !pending.has(entry.target)) continue;
      const sketch = entry.target;
      pending.delete(sketch);
      observer.unobserve(sketch);
      sketch.removeAttribute("data-drawing");
      if (!reducedMotion.matches) playDrawing(sketch);
    }
  }, { threshold: .5 });
  updateMotionPreference();
  for (const sketch of pending) observer.observe(sketch);
  reducedMotion.addEventListener("change", updateMotionPreference);
  window.addEventListener("pagehide", finishAllPlaybacks);
})();
