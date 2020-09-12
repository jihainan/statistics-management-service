import React from 'react';
import { Card, Alert, Switch, notification } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { controllModel } from '@/services/data';

const openNotificationWithIcon = (type: string, tips: string) => {
  notification[type]({
    message: '模式变更成功！',
    description: tips,
  });
};

const onChange = (checked: boolean) => {
  const tips = checked ? '智能风向跟踪模式已打开！' : '智能风向跟踪模式已关闭！';
  controllModel({ state: checked }).then((res) => {
    if (res.code === 200) {
      openNotificationWithIcon('success', tips);
    }
  });
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
      <div style={{ fontSize: 20, lineHeight: 1.5 }}>
        智能风向跟踪模式
        <Switch
          checkedChildren="开启"
          unCheckedChildren="关闭"
          defaultChecked
          onChange={onChange}
          style={{ margin: '0 16px' }}
        />
      </div>
      <br />
      <h3>模式介绍：</h3>
      <p>
        打开智能风向跟踪模式，轨道式风力发电系统将实时检测风向，并通过智能算法计算最优叶片迎风角度，主动调整发电机叶片角度，以达到风能的利用效率最大化。
      </p>
    </Card>
  </PageHeaderWrapper>
);
