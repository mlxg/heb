<template>
  <div class="appoint-wrap">
    <el-form ref="form" :model="form" :rules="rules">
      <div>
        <el-form-item label="姓名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请准确填写购房者全名"
            maxlength="8"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="telephone">
          <el-input
            v-model="form.telephone"
            type="tel"
            placeholder="请准确填写购房者手机号"
            auto-complete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="身份证后六位" prop="certId">
          <el-input
            id="cerIdDom"
            v-model="form.certId"
            type="text"
            placeholder="请准确填写"
            maxlength="6"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="楼盘所在地区" prop="addrArea">
          <el-input
            v-model="form.addrArea"
            :disabled="autofill"
            maxlength="12"
            placeholder="例如：广东省深圳市"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="意向楼盘名字" prop="buildingName">
          <el-input
            v-model="form.buildingName"
            :disabled="autofill"
            maxlength="12"
            placeholder="请准确填写"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="预期看房日期" prop="appointTime">
          <el-date-picker
            v-model="form.appointTime"
            style="width:100%"
            value-format="yyyy-MM-dd"
            type="date"
            :picker-options="pickerOptions"
            placeholder="请准确填写"
            :editable="false"
            @focus="focusDate"
            @blur="blurDate"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="购房需求">
          <el-input
            v-model="form.demand"
            placeholder="请描述"
            maxlength="80"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="mb15 terms">
          <el-checkbox v-model="protocolCheck">已经阅读并同意</el-checkbox>
          <span class="imp" @click="showProtocol">《恒大宝隐私保护政策》</span>
        </el-form-item>
        <el-form-item class="mb15">
          <el-button type="danger" class="apply-btn block" @click="submit"
            >立即提交</el-button
          >
        </el-form-item>
        <el-form-item>
          温馨提示：提交资料后，我们会第一时间联系您！
        </el-form-item>
      </div>
    </el-form>

    <el-dialog
      class="success-box"
      top="40vh"
      center
      :visible.sync="dialogSuccess"
    >
      <img class="pic" src="@/assets/img/form/icon_success.png" alt="success" />
      <p>提交成功！我们会第一时间与您联系！</p>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogClose">关闭</el-button>
      </span>
    </el-dialog>

    <div v-if="isDate" class="date-bg"></div>

    <el-dialog
      class="policy"
      title="恒大宝隐私保护政策"
      :visible.sync="dialogVisible"
    >
      <div class="protocol">
        <p class="date">更新日期：2020年6月2日</p>
        <p>
          恒大宝集团（以下称“我们”）尊重并保护用户<b>（以下称“您”）</b>的隐私和个人信息。您使用我们的产品及服务时，我们将按照《恒大宝隐私保护政策》（以下称“本政策”）收集、存储、使用及对外提供您的个人信息。我们希望通过本政策向您说明在您使用我们的服务时，我们对个人信息收集的范围、对个人信息如何保存、使用、保护等，以及我们为您提供的访问、更新、删除和保护这些信息的方式。我们将按照法律法规要求，遵循业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。<br /><br />

          <b
            >本政策适用于我们向您提供的恒大宝APP、小程序等产品和服务，但不适用于恒大宝APP、小程序中由第三方向您提供的产品或服务，也不适用于我们已另行设置独立隐私政策的产品或服务。<br /><br />

            本政策与恒大宝集团恒大宝服务关系紧密，本政策具有合同效力。在使用我们的服务前，我们请您务必仔细阅读并充分理解本政策全部内容。一旦您开始使用我们的产品或服务，将被视为对本政策内容的接受和认可，并同意接受本政策的约束。<br /><br
          /></b>

          恒大宝是恒大兼职销售平台，为说明恒大宝会如何收集、使用和存储您的个人信息及您享有何种权利，我们将通过本文件向您阐述相关事宜，其中要点如下：<br /><br />

          1）个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。如姓名、出生日期、身份证件号码、个人生物识别信息、住址、通信通讯联系方式、通信记录和内容、账号密码、财产信息、征信信息、行踪轨迹、住宿信息、健康生理信息、交易信息等。您保证您提供的个人信息是真实、合法、完整、有效的信息。<br /><br />

          2）我们将逐一说明我们收集的您的个人信息类型及其对应的用途，以便您了解我们针对某一特定功能所收集的具体个人信息的类别、使用理由及收集方式。<br /><br />

          3）当您使用一些功能时，我们会在获得您的同意后，收集您的一些敏感信息，例如您在使用从通讯录获取推荐客户信息的功能时，我们会收集到您所选手机号；您在使用推荐客户功能，填写客户信息时，我们会收集到您推荐客户的姓名、手机号、身份证号后六位等信息。除非按照相关法律法规要求必须收集，拒绝提供这些信息仅会使您无法使用相关特定功能，但不影响您正常使用恒大宝的其他功能。<br /><br />

          <b
            >4）目前，恒大宝一些功能会向相关监管机构授权的第三方提供信息用于信息真实性验证或服务提供，对此您予以充分理解并完全同意，</b
          >如当您使用到某些功能触发恒大宝短信发送时，为使您能成功收到相关短信，我们会将您的手机号共享至第三方短信运营商；当您使用身份证扫描功能上传证件照时，为验证您上传证件的有效性，我们会将身份证信息共享至第三方进行验证；当您使用认证功能或修改个人信息时，为验证您所填个人信息的正确性，我们会将您的姓名、手机号、身份证和银行卡号共享至第三方进行校验。我们会对对外提供信息的行为进行风险评估，确认以上第三方机构提供的验证服务合法合规。<br /><br />

          <b
            >当您使用恒大宝服务时，为便于我们基于恒大统一账号体系向您提供一站式服务以及便于您进行统一管理、保障系统和账号安全等，我们会向恒大统一用户中心提供您的个人信息，将您的个人信息与您通过恒大统一账号登录使用的恒大集团关联公司平台在合理范围内进行共享（详见《恒大统一账号服务协议》《恒大统一账号隐私政策》），对此您予以充分理解并完全同意。<br /><br
          /></b>

          5）目前，恒大宝不会主动从<b>恒大集团</b>外的第三方获取您的个人信息。如未来为业务发展需要从第三方间接获取您的个人信息，我们会在获取前向您明示您个人信息的来源、类型及使用范围，如恒大宝开展业务需进行的个人信息处理活动超出您原本向第三方提供个人信息时的授权同意范围，我们将在处理您的该等个人信息前，向您明示并征得您的同意；此外，我们会严格遵守相关法律法规的规定，不从非法渠道间接获取您的个人信息。<br /><br />

          6）您可以通过本指引所列途径访问、更正、删除您的个人信息，也可以撤回同意、注销帐号、投诉举报以及设置隐私功能。<br /><br />

          <b
            >如您想了解更加详尽的信息，请根据以下索引阅读相应章节：<br /><br />

            1. 我们收集的信息<br />
            2. 信息的存储<br />
            3. 信息安全<br />
            4. 我们如何使用信息<br />
            5. 对外提供<br />
            6. 您的权利<br />
            7. 变更<br />
            8. 未成年人保护<br />
            9. 联系我们<br /><br />

            1.我们收集的信息<br /><br
          /></b>

          在您使用恒大宝服务的过程中，恒大宝会按照如下方式收集您在使用服务时主动提供或因为使用服务而产生的信息，用以向您提供服务、优化我们的服务以及保障您的帐号安全：<br /><br />

          1.1当您使用注册功能时，我们会收集您的姓名、手机号码，收集这些信息是为了快速完成恒大宝注册，若不提供或不同意收集这类信息，您可能无法正常使用我们的个人信息认证、短信通知等服务。<br /><br />

          1.2当您使用认证功能时，我们会收集您的证件类型、证件号码、省市区常驻地、开户行、银行卡号、账户名，收集这些信息是为了完善个人信息，若不提供或不同意收集这类信息，您可能无法正常使用我们的客户推荐功能及佣金发放服务。<br /><br />

          1.3当您使用证件上传功能时，我们会收集您的证件照图片，收集这些信息是由于恒大宝所发放的佣金统一由公司按税法规定预缴税款，在缴纳税款时需收集兼职销售员个人证件照图片，若不提供或不同意收集这类信息，您推荐客户成交后所获得的佣金无法正常发放。<br /><br />

          1.4当您使用客户推荐功能时，我们会收集您所填写的客户姓名、客户手机、客户身份证号后六位、省份、意向楼盘名称，收集这些信息是为完成客户推荐以及查看客户购房状态
          ，若不提供或不同意收集这类信息，您将无法正常推荐客户。<br /><br />

          1.5
          当您使用恒大宝服务时，为保障您正常使用我们的服务，维护我们服务的正常运行，改进及优化我们的服务体验以及保障您的帐号安全，我们会收集您的手机型号、手机操作系统、登录IP地址、服务日志信息（如您修改个人信息、登录操作）等日志信息，这类信息是为提供服务必须收集的基础信息。<br /><br />

          1.6
          当您使用恒大宝服务时，为改进及优化我们的服务体验，给您提供更精确的看房、购房服务，我们会申请收集您的位置信息，您可自行选择是否授权，且后期可在手机设置中自行打开或关闭该授权。<br /><br />

          另外，根据相关法律法规及国家标准，以下情形中，我们可能会收集、使用您的相关个人信息无需征求您的授权同意：<br /><br />

          1) 与国家安全、国防安全等国家利益直接相关的；<br />
          2) 与公共安全、公共卫生、公众知情等重大公共利益直接相关的；<br />
          3) 与犯罪侦查、起诉、审判和判决执行等直接相关的；<br />
          4)
          出于维护您或其他个人的生命、财产、声誉等重大合法权益但又很难得到本人同意的；<br />
          5) 所收集的个人信息是您自行向社会公众公开的；<br />
          6)
          从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；<br />
          7) 根据您要求签订和履行合同所必需的；<br />
          8)
          用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；<br />
          9) 为开展合法的新闻报道所必需的；<br />
          10)
          出于公共利益开展统计或学术研究所必要，且其对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；<br />
          11) 法律法规规定的其他情形。<br /><br />

          请您理解，我们向您提供的功能和服务是不断更新和发展的，如果某一功能或服务未在前述说明中且收集了您的信息，我们会通过页面提示、交互流程、网站公告等方式另行向您说明信息收集的内容、范围和目的，以征得您的同意。<br />
          请您注意，目前恒大宝不会主动从<b>恒大集团外</b>的第三方获取您的个人信息。如未来为业务发展需要从第三方间接获取您个人信息，我们会在获取前向您明示您个人信息的来源、类型及使用范围，如恒大宝开展业务需进行的个人信息处理活动超出您原本向第三方提供个人信息时的授权同意范围，我们将在处理您的该等个人信息前，向您明示并征得您的同意；此外，我们会严格遵守相关法律法规的规定，不从非法渠道间接获取您的个人信息。<br /><br />

          <b>2.信息的存储<br /><br /></b>

          2.1 信息存储的地点<br />
          我们会按照法律法规规定，将境内收集的用户个人信息存储于中国境内。<br />
          2.2 信息存储的期限<br />
          一般而言，我们仅为实现目的所必需的期限内保留您的个人信息，当我们的产品或服务发生停止运营的情形时，我们将以推送通知、公告等形式通知您，并在合理的期限内删除您的个人信息或进行匿名化处理。<br /><br />

          <b>3.信息安全<br /></b>
          我们努力为用户的信息安全提供保障，以防止信息的丢失、不当使用、未经授权访问或披露。我们将在合理的安全水平内使用各种安全保护措施以保障信息的安全。例如，我们会使用加密技术（例如，SSL）、匿名化处理等手段来保护您的个人信息。我们通过不断提升的技术手段加强安装在您设备端的软件的安全能力，尽最大努力防止您的个人信息泄露。例如，我们为了安全传输会在您设备本地完成部分信息加密的工作；对安装的软件发布前进行恶意代码检测、漏洞检测和修复等。我们建立专门的管理制度、流程和组织以保障信息的安全。例如，我们严格限制访问信息的人员范围，要求他们遵守保密义务，并进行审计。若发生个人信息泄露等安全事件，我们会启动应急预案，防止该等安全事件进一步扩大，并以推送通知、公告等形式告知您。<br /><br />

          <b>4.我们如何使用信息<br /></b>
          我们可能将通过某些功能所收集的信息用于我们的其他服务。例如，我们可能将您在使用我们某一功能或服务时我们收集的信息，在另一功能或服务中用于向您提供特定内容，包括但不限于展示广告（您可以在关于广告页面中了解更多）、对您阅读过的内容进行信息安全类提示、基于特征标签进行间接人群画像并提供更加精准和个性化的服务和内容等。<br /><br />

          为了确保服务的安全，帮助我们更好地了解我们应用程序的运行情况，我们可能记录相关信息，例如，您使用应用程序的频率、崩溃数据、总体使用情况、性能数据以及应用程序的来源等。我们尽可能不会主动将我们存储在分析软件中的信息与您在应用程序中提供的个人身份信息相结合，若存在信息结合的，请您务必立即通知我们处理。<br /><br />

          如我们使用您的个人信息，超出了与收集时所声称的目的及具有直接或合理关联的范围，我们将在使用您的个人信息前，再次向您告知并征得您的同意。由于信息处理的复杂性，您充分理解并同意若未及时向您告知并征得您同意的，我们可在使用您上述个人信息后再次向您告知并征得您的同意。<br /><br />

          <b>
            5.对外提供
            目前，恒大宝一些功能会向相关监管机构授权的第三方提供信息用于信息真实性验证或服务提供，对此您予以充分理解并完全同意，</b
          >如当您使用到某些功能触发恒大宝短信发送时，为使您能成功收到相关短信，我们会将您的手机号共享至第三方短信运营商；当您使用身份证扫描功能上传证件照时，为验证您上传证件的有效性，我们会将身份证信息共享至第三方进行验证；当您使用认证功能或修改个人信息时，为验证您所填个人信息的正确性，我们会将您的姓名、手机号、身份证和银行卡号共享至第三方进行校验。我们会对对外提供信息的行为进行风险评估，确认以上第三方机构提供的验证服务合法合规。<br /><br />

          当您使用恒大宝服务时，为便于我们基于恒大统一账号体系向您提供一站式服务以及便于您进行统一管理、保障系统和账号安全等，我们会向恒大统一用户中心提供您的个人信息
          ，将您的个人信息与您通过恒大统一账号登录使用的恒大集团关联公司平台在合理范围内进行共享（详见《恒大统一账号服务协议》《恒大统一账号隐私政策》），对此您予以充分理解并完全同意。<br /><br />

          我们不会对外公开披露其收集的个人信息，如必须公开披露时，我们会向您告知此次公开披露的目的、披露信息的类型及可能涉及的敏感信息，并征得您的同意。<br /><br />

          随着我们业务的持续发展，我们有可能进行合并、收购、资产转让、破产、清算等，我们将告知您相关情形，按照法律法规及不低于本指引所要求的标准继续保护或要求新的控制者继续保护您的个人信息。<br /><br />

          另外，根据相关法律法规及国家标准，以下情形中，我们可能会共享、转让、公开披露个人信息无需事先征得个人信息主体的授权同意：<br /><br />

          1） 与国家安全、国防安全直接相关的；<br />
          2） 与公共安全、公共卫生、重大公共利益直接相关的；<br />
          3） 与犯罪侦查、起诉、审判和判决执行等直接相关的；<br />
          4）
          出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br />
          5） 个人信息主体自行向社会公众公开的个人信息；<br />
          6）
          从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；<br />
          7）法律法规规定的其他情形。<br /><br />

          <b>6.您的权利</b>
          在您使用恒大宝期间，为了您可以更加便捷地访问、更正、删除您的个人信息，同时保障您撤回对个人信息使用的同意及注销帐号的权利，我们在产品设计中为您提供了相应的操作设置，您可以参考下面的指引进行操作。此外，我们还设置了投诉举报渠道，您的意见将会得到及时的处理。<br /><br />

          6.1 访问个人信息<br />
          6.1.1访问[头像、姓名、手机号、证件类型、证件号、常驻地、身份类型、开户行、银行账号、账户名]等基本信息：<br />
          1) 进入恒大宝后，点击“我的”；<br />
          2) 点击头像或姓名，进入“个人设置”页面；<br />
          3) 进行信息查询访问。<br /><br />

          6.1.2访问[证件类型、证件号、姓名]：<br />
          1) 进入恒大宝后，点击“我的”；<br />
          2) 点击头像或姓名，在“个人设置”页面点击“实名认证信息”；<br />
          3) 进行信息查询访问。<br /><br />

          6.2更正个人信息<br />
          6.2.1更改[头像、姓名、证件类型、证件号、常驻地、开户行、银行账号、账户名]：<br />
          1) 进入恒大宝后，点击“我的”；<br />
          2) 点击头像或姓名，进入“个人设置”页面；<br />
          3) 更改信息。<br /><br />

          6.3注销帐号<br />
          6.3.1注销恒大宝帐号<br />
          1) 进入恒大宝后，点击“我的”；<br />
          2) 在“我的”页面，点击“设置”；<br />
          3) 点击“设置”页面右上角“…”；<br />
          4) 点击“注销帐号”；<br />
          注： 当您注销帐号后，我们将删除或匿名化处理您的个人信息<br /><br />

          <b
            >7.变更<br />
            在相关法律法规发生变化或我们服务发生变动等情形下，我们如需对本政策内容做出修改，将会在您登录时以推送通知、弹窗等形式向您提示变更后的条款。您如不同意新的修改内容，请及时与我们联系或立即停止使用本政策约定的服务，如您选择继续使用相关服务，则视为您完全同意并接受新的修改内容。如客观情况及经营方针变化导致我们需中断或停止相关服务的，我们将及时进行通知，请您对此表示理解和认同。<br /><br />

            8.未成年人保护<br
          /></b>
          我们非常重视对未成年人个人信息的保护。根据相关法律法规的规定，若您是18周岁以下的未成年人，在使用恒大宝服务前，应事先取得您的家长或法定监护人的书面同意。若您是未成年人的监护人，当您对您所监护的未成年人的个人信息有相关疑问时，请通过第9节中的联系方式与我们联系。<br /><br />

          <b>9.联系我们<br /></b>
          当您有其他的投诉、建议、未成年人个人信息相关问题时，您也可以将问题发送至Dataprivacy@evergrande.com<br />
          我们将尽快审核所涉问题，并在成功验证您的用户身份后的15天内予以回复。
        </p>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button class="block" type="danger" @click="dialogVisible = false">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { Loading } from 'element-ui'
// import { form } from '@/apis'

export default {
  data() {
    const checkPhone = (rule, value, callback) => {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value)) {
        return callback(new Error('请输入正确的手机号码'))
      }
      return callback()
    }

    const checkCertId = (rule, value, callback) => {
      if (!/^\d{5}[0-9X]$/.test(value)) {
        return callback(new Error('请输入正确的身份证后六位'))
      }
      return callback()
    }

    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      dialogCode: false,
      dialogSuccess: false,
      dialogVisible: false,
      protocolCheck: false,
      autofill: false,
      form: {
        username: '',
        telephone: '',
        certId: '',
        addrArea: '',
        buildingName: '',
        appointTime: '',
        demand: ''
      },
      rules: {
        username: { required: true, message: '请输入姓名', trigger: 'blur' },
        telephone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        certId: [
          { required: true, message: '请输入身份证后六位', trigger: 'blur' },
          { validator: checkCertId, trigger: 'blur' }
        ],
        addrArea: {
          required: true,
          message: '请输入楼盘所在地区',
          trigger: 'blur'
        },
        buildingName: {
          required: true,
          message: '请输入意向楼盘名字',
          trigger: 'blur'
        },
        appointTime: {
          required: true,
          message: '请输入选择日期',
          trigger: 'blur'
        }
      },
      isDate: false
    }
  },
  mounted() {
    // 跳转参数
    this.form.addrArea = this.$route.query.cityName
    this.form.buildingName = this.$route.query.buildingName
    if (this.form.addrArea && this.form.buildingName) {
      this.autofill = true
    }
  },
  methods: {
    dialogClose() {
      this.dialogSuccess = false
      window.location.href = '/'
    },
    showCode() {
      this.dialogCode = true
    },
    showProtocol() {
      this.dialogVisible = true
    },
    submit() {
      this.form.certId = document.getElementById('cerIdDom').value
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (!this.protocolCheck) {
            this.$message.warning(
              '请先阅读并同意《恒大恒房通官网隐私保护政策》'
            )
          }
          // const loadingInstance = Loading.service({ lock: true })
          // form(this.form).then((val) => {
          //   loadingInstance.close()
          //   this.dialogSuccess = true
          // }, (err) => {
          //   loadingInstance.close()
          //   this.$message({
          //     showClose: true,
          //     message: err,
          //     type: 'error'
          //   })
          // })
        }
      })
    },
    focusDate() {
      this.isDate = true
    },
    blurDate() {
      this.isDate = false
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-form-item {
  position: relative;
  margin-bottom: 24px;

  &.is-error {
    margin-bottom: 16px;

    .el-input__inner {
      border-color: rgba(255, 50, 60, 1);
    }
  }

  &.mb0 {
    margin-bottom: 0;
  }

  &.mb15 {
    margin-bottom: 15px;
  }

  &__label {
    margin-bottom: 16px;
    position: relative;
    padding-right: 24px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(68, 68, 79, 1);
    line-height: 28px;

    &::before {
      position: absolute;
      top: 4px;
      right: 0;
      font-weight: bold;
      font-size: 24px;
    }
  }

  &__error {
    top: 0;
    right: 0;
    left: auto;
    padding: 8px 0 0 18px;
    color: rgba(255, 0, 12, 1);
    font-size: 14px;
    line-height: 20px;

    &::before {
      content: '';
      position: absolute;
      top: 11px;
      left: 0;
      width: 14px;
      height: 14px;
      background-image: url('~@/assets/img/form/icon_error.png');
      background-repeat: no-repeat;
      background-size: 14px 14px;
      background-position: left center;
    }
  }

  &__content {
    position: relative;
    font-size: 14px;
    color: rgba(68, 68, 79, 1);
    line-height: 20px;
    text-align: center;
  }

  .el-input__inner {
    height: 52px;
    padding: 0 20px;
    line-height: 52px;
    border-color: rgba(207, 207, 212, 1);
    border-radius: 4px;

    &:focus {
      border-color: rgba(0, 130, 248, 1);
    }
  }
}

.el-date-table td {
  &.today span {
    color: #dd000f;
  }

  &.current:not(.disabled) span {
    background-color: #dd000f;
  }
}

.el-input__icon.el-icon-circle-close {
  position: absolute;
  right: -99px;
  z-index: -1;
}

.policy /deep/ .el-dialog {
  width: 1200px;
  border-radius: 8px;
  color: rgba(68, 68, 79, 1);

  &__header {
    text-align: center;
    padding: 48px 64px 28px;
  }

  &__headerbtn .el-dialog__close {
    color: rgba(169, 168, 174, 1);

    &:hover {
      color: rgba(131, 130, 136, 1);
    }
  }

  &__title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }

  &__headerbtn .el-dialog__close {
    color: #000;
    line-height: 22px;
  }

  &__body {
    padding: 0 64px 24px;
  }

  .date {
    margin-bottom: 12px;
    font-size: 12px;
    line-height: 17px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }

  .txt {
    text-indent: 2em;
  }

  b {
    font-weight: bold;
  }

  .dialog-footer {
    padding-bottom: 44px;

    .el-button--danger.block {
      width: 800px;
      height: 54px;
      margin: 0 auto;
      font-size: 16px;
    }
  }
}

.success-box {
  /deep/ .el-dialog {
    width: 432px;
    padding: 40px 0;

    &__header {
      display: none;
    }

    &__body {
      font-size: 16px;
      color: #5b616c;
      line-height: 22px;
      text-align: center;
    }

    &__footer {
      padding: 36px 0 0;
    }

    .el-button {
      padding: 10px 32px;
      border-radius: 18px;
      font-size: 12px;
    }
  }

  .pic {
    display: block;
    width: 80px;
    margin: 0 auto 16px;
  }
}

.appoint-wrap {
  width: 800px;
  margin: 35px auto 70px;

  input {
    box-shadow: inset 0 0 0 1000px #fff !important;
  }

  .terms span {
    color: rgba(255, 50, 60, 1);
    cursor: pointer;
  }

  .apply-btn {
    height: 54px;
    border-radius: 6px;
    font-size: 16px;
  }
}
</style>
