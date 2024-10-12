declare module 'aos' {
    interface AOSOptions {
      duration?: number;
      easing?: string;
      once?: boolean;
      anchorPlacement?: string;
      offset?: number;
      delay?: number;
      disable?: boolean | 'mobile' | 'phone' | 'tablet' | 'small-desktop';
    }
  
    const AOS: {
      init(options?: AOSOptions): void;
      refresh(): void;
      refreshHard(): void;
    };
  
    export default AOS;
  }
  