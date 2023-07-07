export interface IconStyle {
  id: string;
  defaultIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}
