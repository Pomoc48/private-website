export type AnimationProps = {
    from: number;
    to: number;
    duration: number;
};

export function verticalScroll(elementId: string, offset: number = 0) {
    let element = document.getElementById(elementId);
    if (element === null) return;

    let elementPosition = element.getBoundingClientRect().top;
    let finalPosition = elementPosition + window.scrollY - offset;
    let maxPosition = document.body.offsetHeight - window.innerHeight;

    if (finalPosition < 0) finalPosition = 0;
    if (finalPosition > maxPosition) finalPosition = maxPosition;

    animateScroll({
        from: window.scrollY,
        to: finalPosition,
        duration: 1000,
    });
}

function animateScroll(props: AnimationProps) {
    let startTime = Date.now();
    let stopScroll = false;

    window.addEventListener(
        "wheel",
        () => {
            stopScroll = true;
        },
        { passive: true }
    );

    function scroll(value: number) {
        window.scrollTo(0, value);
    }

    function easeOutQuart(x: number): number {
        return 1 - Math.pow(1 - x, 4);
    }

    function tick() {
        let elapsedTime = Date.now() - startTime;
        let offset = props.to - props.from;
        let easedOffset = offset * easeOutQuart(elapsedTime / props.duration);

        if (stopScroll) return;

        if (elapsedTime < props.duration) {
            scroll(props.from + easedOffset);
            window.requestAnimationFrame(tick);

            return;
        }

        scroll(props.to);
    }

    tick();
}
