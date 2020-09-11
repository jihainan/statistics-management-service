import React from 'react';
import { Card, Alert, Switch } from 'antd';
import { CompassTwoTone } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const onChange = (checked: Boolean) => {
  // eslint-disable-next-line no-console
  console.log(`switch to ${checked}`);
};

export default (): React.ReactNode => (
  <PageHeaderWrapper content=" 控制轨道式风力发电系统的工作模式">
    <Card>
      <Alert
        message="调整模式前请检查发电系统的工作状态并获取最新的工作模式。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 48,
        }}
      />
      <h3>智能风向跟踪模式介绍：</h3>
      <p>
        打开智能风向跟踪模式，轨道式风力发电系统将实时检测风向，并通过智能算法计算最优叶片迎风角度，主动调整发电机叶片角度，以达到风能的利用效率最大化。
      </p>

      <div style={{ fontSize: 24, lineHeight: 1.5 }}>
        <CompassTwoTone spin style={{ marginRight: 8 }} />
        智能风向跟踪模式
        <Switch
          checkedChildren="开启"
          unCheckedChildren="关闭"
          defaultChecked
          onChange={onChange}
          style={{ margin: '0 16px' }}
        />
      </div>
    </Card>
  </PageHeaderWrapper>
);
