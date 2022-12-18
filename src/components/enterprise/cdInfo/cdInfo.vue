<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产地信息</el-breadcrumb-item>
      <el-breadcrumb-item>上传产地信息</el-breadcrumb-item>
    </el-breadcrumb>
     <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input @clear="getLandInfoList" clearable v-model="queryInfo.query" placeholder="请输入地块名称" class="input-with-select">
            <el-button slot="append" @click="getLandInfoList"  icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="addDialogVisible = true">新增地块</el-button>
        </el-col>
      </el-row>
      <!-- 产品列表区域 -->
      <el-table :data="landInfoList" style="width: 100%">
        <el-table-column label="编号" type="index"></el-table-column>
        <el-table-column prop="qymc" label="生产企业名称" width="180">
        </el-table-column>
        <el-table-column prop="chandi" label="地块名称" width="180">
        </el-table-column>
         <el-table-column prop="detailAddress" label="地块详细地址"> </el-table-column>
        <el-table-column prop="lng" label="经度"> </el-table-column>
        <el-table-column prop="lat" label="纬度"> </el-table-column>
        <el-table-column prop="yt" label="用途"> </el-table-column>
        <el-table-column label="操作">
          <!-- 插槽自定义样式 -->
          <template slot-scope="scope">
            <el-tooltip
              effect="dark"
              content="编辑"
              placement="top-start"
             
            >
              <el-button  @click="editPlaceInfo(scope.row.bh)" type="primary" icon="el-icon-edit"></el-button>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="删除"
              placement="top-end"
            >
              <el-button type="warning" @click="delPlaceInfo(scope.row.bh)" icon="el-icon-delete"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="queryInfo.current_page"
        background
        layout="prev, pager,next,total"
        :total="total"
        :page-size="queryInfo.pageSize"
      >
      </el-pagination>
      <!-- 新增地块Dialog弹窗 -->
      <el-dialog width="30%" @close="clearAddForm" title="新增地块" :visible.sync="addDialogVisible">
  <el-form ref="addFormRef" :model="addDialogFormInfo" label-width="80px">
    <el-form-item label="详细地址" prop="detailAddress" >
      <el-input @input="addFormGetLng()" v-model="addDialogFormInfo.detailAddress" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="经度" prop="lng">
      <el-input disabled v-model="addDialogFormInfo.lng" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="纬度" prop="lat">
      <el-input disabled v-model="addDialogFormInfo.lat" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地块名称" prop="chandi">
      <el-input v-model="addDialogFormInfo.chandi" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地块用途" prop="yt">
      <el-input v-model="addDialogFormInfo.yt" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addPlaceSubmit">确 定</el-button>
  </div>
</el-dialog>
<!-- 编辑产地信息dialog -->
  <el-dialog
  title="编辑产地"
  :visible.sync="editDialogVisible"
  width="30%"
  >
  <!-- 表单区 -->
  <el-form :model="editFormInfo" label-width="80px">
   <el-form-item label="详细地址" prop="detailAddress" >
      <el-input @input="editFormGetLng()" v-model="editFormInfo.detailAddress" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="经度" prop="lng">
      <el-input disabled v-model="editFormInfo.lng" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="纬度" prop="lat">
      <el-input disabled v-model="editFormInfo.lat" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地块名称" prop="chandi">
      <el-input v-model="editFormInfo.chandi" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="地块用途" prop="yt">
      <el-input v-model="editFormInfo.yt" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editPlaceInfoSubmit">确 定</el-button>
  </span>
</el-dialog>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
// 百度api请求需要跨域，这里用jsonp请求
import jsonp from 'jsonp';
export default {
    data(){
      return{
          queryInfo:{
            query:'',
            current_page:1,
            pageSize:5
          },
          tokenStr:'',
          landInfoList:[],
          total:0,
          addDialogVisible:false,
          addDialogFormInfo:{
            token:'',
            detailAddress:'',
            lng:'',
            lat:'',
            chandi:'',
            yt:''
          },
          editFormInfo:{

          },
          editDialogVisible:false
          
      }
    },
    created(){
        this.getLandInfoList();
        this.getTokenStr();
    },
    methods:{
       async getLandInfoList(){
         const tokenStr = window.sessionStorage.getItem("token");
      // console.log(tokenStr)
      const {
        data: res
      } = await this.$http.post('PlaceInfo', 
       {token:tokenStr,page:this.queryInfo.current_page,query:this.queryInfo.query}
      );
      if (res.code !== 0) return this.$message.error("获取产地列表数据失败！");
      this.landInfoList = res.data.result;  
      this.total = res.data.total; 
      console.log(this.landInfoList);
      console.log(res.data.result[0])
      },
      // 自动获取经纬度
      addFormGetLng(){
          // 百度地图api获取数据需要跨域，这里用jsonp解决跨域
         jsonp('http://api.map.baidu.com/geocoding/v3/?address='+this.addDialogFormInfo.detailAddress+'&output=json&ak=4Yk2x2mLvNAvAhCSgFEAWMz2BGKp7Ok7&callback=showLocation',
         {},(err,data)=>{
           this.addDialogFormInfo.lng=data.result.location.lng;
           this.addDialogFormInfo.lat=data.result.location.lat;
          //  console.log(data.result.location)
         })
      },
      editFormGetLng(){
        jsonp('http://api.map.baidu.com/geocoding/v3/?address='+this.editFormInfo.detailAddress+'&output=json&ak=4Yk2x2mLvNAvAhCSgFEAWMz2BGKp7Ok7&callback=showLocation',
         {},(err,data)=>{
           this.editFormInfo.lng=data.result.location.lng;
           this.editFormInfo.lat=data.result.location.lat;
          //  console.log(data.result.location)
         })
      },
      // 点击分页时触发
      handleCurrentChange(newPage){
        this.queryInfo.current_page = newPage
        this.getLandInfoList()
      },
      // 新增地块dialog提交按钮触发事件
      async addPlaceSubmit(){
        this.addDialogFormInfo.token=this.tokenStr;
        const {data:res} =await this.$http.post('AddPlaceInfo',this.addDialogFormInfo)
        console.log(res)
        if(res.code !==0){
          return this.$message.error('新增产地失败')
        }
        this.addDialogVisible = false
        this.getLandInfoList();
      },
      getTokenStr(){
      this.tokenStr = window.sessionStorage.getItem('token')
      },
      // 添加产地dialog关闭时触发，重置表单
      clearAddForm(){
          this.$refs.addFormRef.resetFields();
      },
      // 点击编辑按钮时触发
     async editPlaceInfo(id){
        this.editDialogVisible = true;
        this.editFormInfo.detailAddress ='';
       const {data:res} = await this.$http.post('EditPlaceInfo',{token:this.tokenStr,bh:id})
       this.editFormInfo =res.data;
        console.log(id,res)
      },
      // 点击编辑产地dialog提交按钮时触发
      async editPlaceInfoSubmit(){
        this.editFormInfo.token = this.tokenStr;
         const {data:res} = await this.$http.post('DoEditPlaceInfo',this.editFormInfo)
        console.log(res)
         this.editDialogVisible = false;
         this.getLandInfoList();
      },
      // 删除产地信息
      delPlaceInfo(id){
        console.log(id)
          this.$confirm('此操作将永久删除该产地信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('DelPlaceInfo',{
            token:this.tokenStr,bh:id
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getLandInfoList();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
}
</script>

<style scoped lang="less">
    .el-breadcrumb {
  height: 30px;
}
.el-pagination {
  margin-top: 10px;
}
</style>

