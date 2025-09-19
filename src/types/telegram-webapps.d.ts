// Minimal TypeScript declarations for Telegram Web Apps API
// https://core.telegram.org/bots/webapps

interface TelegramWebAppThemeParams {
  bg_color?: string;
  text_color?: string;
  hint_color?: string;
  link_color?: string;
  button_color?: string;
  button_text_color?: string;
}

interface TelegramWebAppMainButton {
  text: string;
  isVisible: boolean;
  setText(text: string): void;
  show(): void;
  hide(): void;
  onClick(cb: () => void): void;
  offClick(cb: () => void): void;
}

interface TelegramWebAppBackButton {
  isVisible: boolean;
  show(): void;
  hide(): void;
  onClick(cb: () => void): void;
  offClick(cb: () => void): void;
}

interface TelegramWebAppHapticFeedback {
  impactOccurred(style: "light" | "medium" | "heavy" | "rigid" | "soft"): void;
}

interface TelegramWebApp {
  initData: string;
  initDataUnsafe: any;
  colorScheme: "light" | "dark";
  themeParams: TelegramWebAppThemeParams;
  isExpanded: boolean;
  viewportHeight: number;
  headerColor?: string;
  backgroundColor?: string;
  MainButton: TelegramWebAppMainButton;
  BackButton: TelegramWebAppBackButton;
  HapticFeedback?: TelegramWebAppHapticFeedback;
  ready(): void;
  expand(): void;
  close(): void;
}

// Augment the global Window type so `window.Telegram` is recognized
interface Window {
  Telegram?: { WebApp?: TelegramWebApp };
}
