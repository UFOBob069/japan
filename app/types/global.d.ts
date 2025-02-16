interface Window {
  eg?: {
    widgets?: {
      load: () => void;
      initialized?: boolean;
      loaded?: boolean;
      elements?: Record<string, HTMLElement>;
    };
  };
  EGWidgets?: {
    load: () => void;
  };
} 