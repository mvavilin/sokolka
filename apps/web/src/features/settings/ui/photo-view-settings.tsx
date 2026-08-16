import { useTranslation } from 'react-i18next';
import { isValueFrom } from '@shared/lib/is-value-from';
import { PHOTO_VIEWS, useSettingsStore } from '@shared/model/settings';
import { PHOTO_VIEW_OPTIONS, SettingsToggleGroup } from '@features/settings';

const PhotoViewSettings = (): React.JSX.Element => {
  const { t } = useTranslation();
  const photoView = useSettingsStore((state) => state.photoView);
  const setPhotoView = useSettingsStore((state) => state.setPhotoView);

  return (
    <SettingsToggleGroup
      title={t('settings.photoView.title')}
      value={photoView}
      options={PHOTO_VIEW_OPTIONS.map((option) => ({
        value: option.value,
        label: t(option.labelKey),
      }))}
      onValueChange={(value) => {
        if (isValueFrom(PHOTO_VIEWS, value)) {
          setPhotoView(value);
        }
      }}
    />
  );
};

export default PhotoViewSettings;
