<template>
  <el-dialog
        title="编辑物流信息"
        :visible.sync="editDialogVisible"
        width="40%"
      >
        <!-- 表单区 -->
        <el-form size="medium"  ref="editFormRef" :inline="true" :model="editFormInfo" label-width="120px">
          <el-form-item label="产品名称">
    <el-select @change="getPch" class="select-width" v-model="editFormInfo.cpmc" placeholder="请选择产品名称">
      <el-option :label="item" v-for="item in cpmcList" :value="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="批次号">
    <el-select class="select-width" v-model="editFormInfo.pch" placeholder="请选择产品批次号">
      <el-option v-for="item in pchList" :value="item" :label="item" :key="item.index"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="发货人"  prop="shiper_name">
            <el-input v-model="editFormInfo.shiper_name"></el-input>
          </el-form-item>
          <el-form-item label="发货人联系方式"  prop="shiper_phone">
            <el-input v-model="editFormInfo.shiper_phone"></el-input>
          </el-form-item>
          <el-form-item label="发货地址"  prop="ship_address">
            <el-input v-model="editFormInfo.ship_address"></el-input>
          </el-form-item>
          <el-form-item label="目的地"  prop="destination">
            <el-input v-model="editFormInfo.destination"></el-input>
          </el-form-item>
          <el-form-item label="收件人">
    <el-select   class="select-width" v-model="editFormInfo.client_id" placeholder="请选择收件人信息">
      <el-option :label="item.client_name" v-for="item in clientInfoList" :value="item.id" :key="item.id"></el-option>
    </el-select>
  </el-form-item>
          <el-form-item label="运送人"  prop="carrier">
            <el-input v-model="editFormInfo.carrier"></el-input>
          </el-form-item>
          <el-form-item label="运输联系方式"  prop="carrier_phone">
            <el-input v-model="editFormInfo.carrier_phone"></el-input>
          </el-form-item>
          <el-form-item label="运输数量" prop="number">
            <el-input placeholder="单位：kg" v-model="editFormInfo.number"></el-input>
          </el-form-item>
          <el-form-item label="车牌号"  prop="license">
            <el-input v-model="editFormInfo.license"></el-input>
          </el-form-item>
          <el-form-item label="快递单号"  prop="courier_number">
            <el-input v-model="editFormInfo.courier_number"></el-input>
          </el-form-item>
           <el-form-item  label="货运单图片名称" prop="waybill_pic">
    <el-input disabled v-model="editFormInfo.waybill_pic"></el-input>
  </el-form-item>
  <el-form-item label="货运单图片上传">
    <!-- 图片上传组件 -->
  <el-upload
  ref="upload"
  name="image"
  class="upload-demo"
  :action="uploadURL"
  :on-success="successEvent"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png格式的图片，且图片大小不能超过1MB</div>
</el-upload>

  </el-form-item>
    <el-form-item  label="现场图片名称" prop="cargo_pic">
    <el-input disabled v-model="editFormInfo.cargo_pic"></el-input>
  </el-form-item>
  <el-form-item label="现场图片上传">
    <!-- 图片上传组件 -->
  <el-upload
  ref="upload"
  name="image"
  class="upload-demo"
  :action="carGoUploadURL"
  :on-success="carGoSuccessEvent"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png格式的图片，且图片大小不能超过1MB</div>
</el-upload>
  </el-form-item>
          <el-form-item label="发货日期"  prop="delivery_time">
            <el-date-picker
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              v-model="editFormInfo.delivery_time"
              type="date"
              placeholder="选择日期"
              
            >
            </el-date-picker>
          </el-form-item>
         
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editFormSubmit">确 定</el-button>
        </span>
      </el-dialog>
</template>

<script>
export default {
    props:{
        editdialog:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{
            editDialogVisible:this.editdialog,
editFormInfo:{
          id:'',
          cpmc:'',
         pch:'',
        destination:'',
        ship_address:'',
        carrier:'',
        accepter:'',
        carrier_phone:'',
        number:'',
        license:'',
        courier_number:'',
        waybill_pic:'',
        cargo_pic:'',
        delivery_time:'',
        shiper_name:'',
        shiper_phone:''
        },
        }
    },
    methods:{
        async editInfo(id){
    
        // console.log(id)
     const{data:res} = await this.$http.post('EditTransportInfo',{token:this.tokenStr,id:id});
     console.log(res)
     if(res == '不允许修改'){
        this.$notify.error({
          title: '错误',
          message: '已生成物流单号，不允许修改'
        });
     }
      this.editFormInfo.id = res.data.id;
     this.editFormInfo.cpmc = res.data.cpmc;
     this.editFormInfo.pch = res.data.pch;
     this.editFormInfo.destination = res.data.destination;
     this.editFormInfo.ship_address = res.data.ship_address;
     this.editFormInfo.carrier = res.data.carrier;
     this.editFormInfo.accepter = res.data.accepter;
     this.editFormInfo.number = res.data.number;
        this.editFormInfo.license = res.data.license;
           this.editFormInfo.courier_number= res.data.courier_number;
     this.editFormInfo.carrier_phone = res.data.carrier_phone;
     this.editFormInfo.waybill_pic = res.data.waybill_pic;
     this.editFormInfo.cargo_pic = res.data.cargo_pic;
     this.editFormInfo.delivery_time = res.data.delivery_time;
      this.editFormInfo.shiper_name = res.data.shiper_name;
       this.editFormInfo.shiper_phone = res.data.shiper_phone;
     this.editDialogVisible =true;

    },
    async editFormSubmit(){
     await this.$http.post('DoEditTransportInfo',this.editFormInfo)
      this.editDialogVisible =false;
      this.$message.success('编辑成功')
      this.getDataList();
    },
    }

}
</script>

<style>

</style>