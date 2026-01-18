export interface Asset {
  id: number;
  title: string;
  cover_url: string;
  short_text: string;
  published_at: string;
  views_count: number;
  downloads_count: number;
  url: string;
  p_windows: boolean;
  p_linux: boolean;
  p_osx: boolean;
  p_android: boolean;
  type: string;
  min_price: number;
  classification: string;
  earnings?: { amount_formatted: string; amount: number; currency: string }[];
}
