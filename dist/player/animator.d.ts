export declare class Animator {
    private isRunning;
    private startTime;
    private currentFrication;
    private worker;
    isOpenNoExecutionDelay: boolean;
    startValue: number;
    endValue: number;
    duration: number;
    loopStart: number;
    loop: number;
    fillRule: number;
    onStart: () => void;
    onUpdate: (currentValue: number) => void;
    onEnd: () => void;
    currentTimeMillsecond: () => number;
    start(): void;
    stop(): void;
    get animatedValue(): number;
    private doFrame;
    private doDeltaTime;
}
