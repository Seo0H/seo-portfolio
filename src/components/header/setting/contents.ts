import { Buttons } from '@/components/button';

export const SettingContents: {
  visible: string;
  button: typeof Buttons.DownloadPdf | typeof Buttons.ToggleDarkMode;
}[] = [
  { visible: 'DarkMode', button: Buttons.ToggleDarkMode },
  { visible: 'PDF 저장', button: Buttons.DownloadPdf },
];
