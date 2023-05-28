<template>
  <div class="gantt-container">
    <el-row>
      <el-col :span="24">
        <div class="gantt-target"></div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Gantt from "frappe-gantt";

export default {
  name: "GanttDemo",
  data() {
    return {
      tasks: [ //甘特图数据
        {
          start: "2023-04-01",
          end: "2023-04-08",
          name: "测试任务1",
          id: "1",
          progress: 26, // 任务进度
          task: "50%",
          date: 3,
          children: []
        },
        {
          start: "2023-04-03",
          end: "2023-04-06",
          name: "测试任务2",
          id: "2",
          progress: 0,
          task: "50%",
          date: 3,
          children: []
        },
        // dependencies: '1'        },
        {
          start: "2023-04-04",
          end: "2023-04-08",
          name: "测试任务3",
          id: "3",
          progress: 0,
          task: "50%",
          date: 3,
          children: []
          // dependencies: '1'
        },
        {
          start: "2023-04-08",
          end: "2023-04-09",
          name: "测试任务4",
          id: "4",
          progress: 0,
          task: "50%",
          date: 3,
          children: []
          // dependencies: '2'
        },
        {
          start: "2023-04-08",
          end: "2023-04-10",
          name: "测试任务5",
          id: "5",
          progress: 50,
          task: "50%",
          date: 3,
          children: []
          // dependencies: '2'
        }
      ],
      gantt: null,
    }

  },
  mounted() {
    this.createGantt();
  },
  methods: {
    createGantt() { // 创建甘特图方法
      const gantt = new Gantt(".gantt-target", this.tasks, {
        on_click: function (task) { // 双击事件
          console.log("双击事件", task); // task是任务对象
        },
        on_date_change: function (task, start, end) { // task是任务对象 start是条形图拖拽结束之后的开始时间 end是条形图拖拽结束之后的截至时间
          // 这里可以结合表格对某一行的数据进行操作
        },
        on_progress_change: function (task, progress) {// 进度发生改变事件
          console.log(task, progress);
        },
        on_view_change: function (mode) {
          console.log(mode);
        },
        language: "zh", // 语言
        header_height: 70, // header_height + 10 就是头部的高度 比如header_height：70 那header的高度是80px
        column_width: 90, // 列宽度
        step: 24,
        view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"],
        bar_height: 62, //  bar_height + padding 就是每一行的高度
        bar_corner_radius: 5, // bar 的圆角度
        arrow_curve: 20, //连接子任务的线条曲线度
        padding: 18,
        view_mode: "Day", // header的日期类型
        date_format: "YYYY-MM-DD", // 日期格式
        custom_popup_html: function (task) { // 自定义内容
          // the task object will contain the updated
          // dates and progress value
          console.log(task);
          return `
          <div class="details-container">
            <h5>${task.name}</h5>
            <p>Expected to finish by ${task.end}</p>
            <p>${task.progress}% completed!</p>
          </div>
          `;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
