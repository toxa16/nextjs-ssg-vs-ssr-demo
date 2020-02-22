import { Spin, Icon } from 'antd';

/**
 * Blog loading state component.
 */
export default function Loading() {
  const icon = <Icon
    type="loading"
    style={{ marginBottom: '0.5rem' }}
    spin
  />;

  return (
    <div className="text-center">
      <Spin
        indicator={icon}
        tip="Loading..."
      />
    </div>
  );
}
