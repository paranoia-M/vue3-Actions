<template>
  <view>
    <uni-card class="uploadCard" :is-full="true" v-for="list in configList" :key="list.id" :title="list.name">
      <view class="uploadModule" v-for="(k, ki) in fileData['module'+list.code]" :key="k.fileName" @click="previewImage(ki, list)">
        <image v-if="list.type ==='1'" class="b" lazy-load :src="k.decodePath" mode="aspectFill"></image>
        <video v-if="list.type ==='2'" :id="'vedio'+ki" :data-id="'vedio'+ki" :src="k.imgPath" controls class="video-sty"></video>
        <view class="c" @click.stop="removeImg(ki, list)">
          <image class="d" src="/static/delete.png" mode="aspectFill"></image>
        </view>
      </view>
      <view class="uploadModule" @click="upload_img(list)" v-if="(fileData['module'+list.code]&&fileData['module'+list.code].length>0?fileData['module'+list.code].length:0)<list.num">
        <image v-if="list.type ==='1'" class="a" lazy-load src="/static/upload.png" mode="aspectFill"></image>
        <p v-if="list.type ==='2'" style="color: #1890FF;">+ 上传文件</p>
      </view>
    </uni-card>
    <button type="primary" class="btn-ssty" @click="saveImgData">保 存</button>
    <canvas canvas-id='myCanvas' style="opacity: 0;"></canvas>
  </view>
</template>

<script>
import uploader from '@/common/upload.js'
// import uploader from '@/components/uni-upload-img/upload_img.js'
import uploaderVedio from '@/components/uni-upload-img/upload_vedio.js'
import uniCard from '@/components/uni-card/uni-card.vue'
import { imgdataconfprod, ossSignDirectTrans } from '@/api/imageData.js'
import configPartner from '@/common/config-path.js'
import dictFile from '@/common/dicFile.js'
export default {
  components: { uniCard },
  data() {
    return {
      configList: [],
      flowDataPage: {},
      fileData: {},
      fileList: [],
      uploadType: {},
      item: {},
      // zsKey: 0,
      comindex: undefined,
    };
  },
  onLoad(obj) {
    this.flowDataPage = Object.assign({}, this.flowDataPage, JSON.parse(decodeURIComponent(obj.flowDataPage)))
    this.item = JSON.parse(decodeURIComponent(obj.item))
    this.comindex = obj.comindex
    if (this.item.ioType === '0') {
      this.imgdataconfprodFun()
      let data = JSON.parse(decodeURIComponent(obj.data))
      if (Object.keys(data).length > 0) {
        let b;
        if (obj.comindex == "undefined" || obj.comindex == "null") {
          b = data[this.item.modelName] && data[this.item.modelName][this.item.id] && data[this.item.modelName][this.item.id].imgDataList
        } else {
          b = data[this.item.modelName + obj.comindex] && data[this.item.modelName + obj.comindex][this.item.id] && data[this.item.modelName + obj.comindex][this.item.id].imgDataList
        }
        b && b.forEach(bitem => {
          if (bitem.imageList) {
            let imageList = bitem.imageList;
            imageList.forEach(i => {
              this.GetQueryStringApp(i.filePath, 'url').then(resData => {
                i.decodePath = resData
                this.$set(this.fileData, 'module' + bitem.code, imageList)
                this.$forceUpdate()
              })
            })
          }
        })
      }
      console.log(39, this.fileData)
    }
    console.log(this.item)
  },
  methods: {

    imgdataconfprodFun() {
      imgdataconfprod({
        definitionKey: this.flowDataPage && this.flowDataPage.definitionKey,
        taskName: this.flowDataPage && this.flowDataPage.taskName
      }).then(res => {
        const { recode, remsg, data } = res.data;
        if (recode === '000000') {
          data.forEach(t => {
            if (t.totalType === '1') {
              t.num = 1
            } else if (t.totalType === '2') {
              t.num = 2
            } else if (t.totalType === '3') {
              t.num = 20
            }
          })
          this.configList = data.filter(d => d.elementGroup === this.item.group);
          console.log(this.configList)
        } else {
          uni.showToast({
            title: remsg,
            icon: 'none'
          })
        }
      })
    },
    getossSignDirectTrans() {
      return new Promise((resolve, reject) => {
        ossSignDirectTrans({
          type: '10'
        }).then(res => {
          const { recode, remsg, data } = res.data;
          if (recode === '000000') {
            const ossdata = data.url ? JSON.parse(data.url) : {};
            return resolve(ossdata)
          } else {
            uni.showToast({
              title: remsg,
              icon: 'none'
            })
          }
        })
      });
    },
    async upload_img(list) {
      console.log(116, list)
      let num = 1;
      if (list.totalType === '1') {
        num = 1
      } else if (list.totalType === '2') {
        num = 1
      } else if (list.totalType === '3') {
        num = 9
      }
      uni.showLoading({
        title: '正在上传中～～～',
      })
      if (list.type === '1') {
        let uploadimg = new uploader;
        let uploadVedio = new uploaderVedio;
        uploadimg.choose_and_upload({ count: num, uploadType: '30', maxSize: 10, that: this, toBase64: false }).then(res => {
          console.log(122, res)
          uni.hideLoading()
          if (this.fileData['module' + list.code]) {
            let imgList = res.files;
            imgList.forEach(i => {
              this.GetQueryStringApp(i.filePath, 'url').then(resData => {
                i.decodePath = resData;
                this.fileData['module' + list.code].push(i)
                this.$forceUpdate()
              })
            })
          } else {
            let imgList = res.files;
            imgList.forEach(i => {
              this.GetQueryStringApp(i.filePath, 'url').then(resData => {
                i.decodePath = resData;
                this.$set(this.fileData, 'module' + list.code, imgList)
                this.$forceUpdate()
              })
            })
          }

          if (res.errorMsgList.length > 0) {
            uni.showToast({
              title: `上传图片中有${res.errorMsgList.length}张超过10M，请检查缺失图片并重新上传`,
              icon: 'none'
            })
          }
          // this.zsKey+=1
          console.log(145, this.fileData)
        }).catch(err => {
          uni.hideLoading()
        })
      }
      //  else if (list.type === '2') {
      //   let fileSg = {};
      //   try {
      //     fileSg = await uploadVedio.choose_vedio_and_upload({ cameraType: 'back', maxSize: 30 })
      //     uni.hideLoading()
      //   }
      //   catch {
      //     uni.hideLoading()
      //   }
      //   console.log(166, fileSg);
      //   let imgPath = await this.GetQueryStringApp(fileSg.filePath, 'url');
      //   fileSg.imgPath = imgPath;
      //   // let 
      //   if (this.fileData['module' + list.code]) {
      //     this.fileData['module' + list.code].push(fileSg)
      //   } else {
      //     this.$set(this.fileData, 'module' + list.code, [fileSg])
      //   }
      //   this.$forceUpdate()
      // }
      else if (list.type == '2') {
        this.uploadType = dictFile.riskReport;
        const that = this;
        console.log(190, that);
        let access_token = uni.getStorageSync('access_token');
        wx.chooseMessageFile({
          count: 10,
          type: 'all',
          success(res) {
            console.log(195, res)
            const tempFilePaths = res.tempFiles;
            uni.showLoading({
              title: '文件上传中',
              mask: true
            });
            for (let a in tempFilePaths) {
              uni.uploadFile({
                // url: configPartner.URLPATH+'/file/upload',
                url: configPartner.URLS + '/file/upload',
                filePath: tempFilePaths[a].path,
                formData: {
                  'type': that.uploadType,
                },
                name: 'file',
                header: {
                  'Authorization': access_token ? `bearer ${access_token}` : null,
                  'saasTenantToken': uni.getStorageSync('saas_tenant_token')
                },
                success: (ress => {
                  console.log(215, ress);
                  uni.hideLoading()
                  const { data, statusCode } = ress;
                  if (statusCode === 200) {
                    let fileData = JSON.parse(data)
                    const { recode, remsg } = fileData;
                    console.log(225, fileData);
                    if (recode === '000000') {
                      fileData.data.originalFileName = tempFilePaths[a].name
                      that.fileList.push(fileData.data)
                      console.log(229, that.fileList)
                    } else {
                      uni.showToast({
                        title: '文件上传错误'
                      })
                    }
                  }
                })
              })
            }
          },
          fail() {
            uni.showToast({
              title: '文件上传失败请退出重试',
              icon: 'none'
            })
          }
        })
      }
    },
    previewImage(ki, list) {
      if (list.type === '1') {
        let urls = (this.fileData['module' + list.code] || []).map(f => f.decodePath);
        uni.previewImage({
          current: ki,
          urls: urls
        });
      } else if (list.type === '2') {
        // 获取 video 上下文 videoContext 对象
        // this.videoContext = uni.createVideoContext('vedio' + ki);
        // 进入全屏状态
        // this.videoContext.requestFullScreen();
        let path = this.fileList && this.fileList[ki] && this.fileList[ki].filePath
        uni.navigateTo({
          url: '/page-apply/index/ApplyLoan/formModule/filepreview?path=' + encodeURIComponent(path)
        })
      }
      console.log(260, this.fileData)
    },
    removeImg(ki, list) {
      this.fileData['module' + list.code].splice(ki, 1)
      this.$forceUpdate()
      console.log('123', this.fileData)
    },
    saveImgData() {
      this.configList.forEach(c => {
        this.fileData['module' + c.code] && this.fileData['module' + c.code].forEach((d, i) => {
          d.order = i
        })
        if (this.fileData['module' + c.code]) {
          c.imageList = this.fileData['module' + c.code]
        }
      })
      let a = [];
      this.configList.forEach(im => {
        if (im.elementRequired === '1' && im.totalType === '2') {
          if (!im.imageList || im.imageList.length < 2) {
            a.push(im.name + '(2张)')
          }
        } else if (im.elementRequired === '1') {
          if (!im.imageList || im.imageList.length === 0) {
            a.push(im.name)
          }
        }
      })
      if (a.length > 0) {
        uni.showToast({
          title: '请上传' + a.join('、'),
          icon: 'none'
        })
        return
      }
      this.$bus.$emit('getModuleData', {
        [this.item.modelName]: {
          [this.item.id]: {
            imgDataList: this.configList
          }
        },
        item: this.item,
        comindex: this.comindex
      })
      uni.navigateBack();
      console.log(90, this.configList)
    }
  },
}
</script>

<style lang="scss">
@import "./imageData.scss";
.btn-ssty {
  width: 80%;
  margin-top: 30rpx;
  padding: 0 40rpx;
}
.video-sty {
  width: 100%;
  height: 100%;
}
</style>
