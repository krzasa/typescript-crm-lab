declare module 'prompt-sync' {
    interface Prompt {
      (ask: string): string;
      hide(ask: string): string;
    }
    interface Options {
      sigint?: boolean;
      autocomplete?: (input: string) => string[];
      history?: {
        save: (line: string) => void;
        atStart: () => boolean;
        atPenultimate: () => boolean;
        prev: () => string;
        next: () => string;
      };
    }
    const prompt: (options?: Options) => Prompt;
    export = prompt;
  }
  