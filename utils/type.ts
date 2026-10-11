export interface HomeSlideData {
  id: number;
  image: string;
  headline: string[];
  subheading: string;
  description: string;
  showScrollPrompt?: boolean;
}

export interface NavItem {
  number?: string;
  label: string;
  href: string;
  tag?: string;
  description?: string;
}

