import { computed } from 'vue';

export default function formatter(data) {
  const formatMapping = {
    species_id: { 0: '貓', 1: '狗' },
    gender: { 0: '男', 1: '女' },
    is_ligation: { true: '是', false: '否' },
    size_id: { 0: '小', 1: '中', 2: '大' },
    tag: { 0: '等待接受', 1: '等待付款', 2: '即將執行', 3: '最新回應', 4: '結案' }
  };

  const formatData = (key) => computed(() => formatMapping[key][data.value[key]] || null);

  return {
    formatSpecies: formatData('species_id'),
    formatGender: formatData('gender'),
    formatIsLigation: formatData('is_ligation'),
    formatSize: formatData('size_id'),
    formatTag: formatData('tag')
  };
}