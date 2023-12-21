export default {
  agentDefaultMessage:
    '你好，我是 **{{name}}**，你可以立即与我开始对话，也可以前往 [助手设置](/chat/settings#session={{id}}) 完善我的信息。',
  agentDefaultMessageWithSystemRole: '你好，我是 **{{name}}**，{{systemRole}}，让我们开始对话吧！',
  backToBottom: '跳转至当前',
  clearCurrentMessages: '清空当前会话消息',
  confirmClearCurrentMessages: '即将清空当前会话消息，清空后将无法找回，请确认你的操作',
  confirmRemoveSessionItemAlert: '即将删除该助手，删除后该将无法找回，请确认你的操作',
  defaultAgent: '自定义助手',
  defaultSession: '自定义助手',
  historyRange: '历史范围',
  inbox: {
    defaultMessage:
      '你好，我是你的智能助手，你可以问我任何问题，我会尽力回答你。如果需要获得更加专业或定制的助手，可以点击`+`创建自定义助手',
    desc: '开启大脑集群，激发思维火花。你的智能助理，在这里与你交流一切',
    title: 'GPT 聊天助手',
  },
  newAgent: '新建助手',
  noDescription: '暂无描述',

  pin: '置顶',
  pinOff: '取消置顶',
  regenerate: '重新生成',
  roleAndArchive: '角色与记录',
  searchAgentPlaceholder: '搜索助手和对话...',
  send: '发送',
  sendPlaceholder: '输入聊天内容...',
  sessionList: '助手列表',
  shareModal: {
    download: '下载截图',
    imageType: '图片格式',
    screenshot: '截图',
    settings: '导出设置',
    shareToShareGPT: '生成 ShareGPT 分享链接',
    withBackground: '包含背景图片',
    withFooter: '包含页脚',
    withPluginInfo: '包含插件信息',
    withSystemRole: '包含助手角色设定',
  },
  stop: '停止',
  stt: {
    action: '语音输入',
    loading: '识别中...',
    prettifying: '润色中...',
  },
  temp: '临时',
  tokenDetail:
    '角色设定: {{systemRoleToken}} · 会话消息: {{chatsToken}} · 工具设定: {{toolsToken}}',
  tokenTag: {
    overload: '超过限制',
    remained: '剩余',
    used: '使用',
  },
  topic: {
    confirmRemoveAll: '即将删除全部会话，删除后将不可恢复，请谨慎操作。',
    confirmRemoveTopic: '即将删除该会话，删除后将不可恢复，请谨慎操作。',
    confirmRemoveUnstarred: '即将删除未收藏会话，删除后将不可恢复，请谨慎操作。',
    defaultTitle: '默认会话',
    openNewTopic: '开启新会话',
    removeAll: '删除全部会话',
    removeUnstarred: '删除未收藏会话',
    saveCurrentMessages: '将当前会话保存为新会话',
    searchPlaceholder: '搜索会话...',
    title: '会话列表',
  },
  translate: {
    action: '翻译',
    clear: '删除翻译',
  },
  tts: {
    action: '语音朗读',
    clear: '删除语音',
  },
  updateAgent: '更新助理信息',
  upload: {
    actionTooltip: '上传图片',
    dragDesc: '拖拽文件到这里，支持上传多个图片。按住 Shift 直接发送图片',
    dragTitle: '上传图片',
  },
  warp: '换行',
};
