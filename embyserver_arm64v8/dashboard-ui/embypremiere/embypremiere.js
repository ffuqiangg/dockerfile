define(["exports","./../modules/viewmanager/basesettingsview.js","./../modules/emby-elements/emby-input/emby-input.js","./../modules/emby-elements/emby-button/emby-button.js","./../modules/common/globalize.js","./../modules/loading/loading.js","./../modules/registrationservices/registrationservices.js","./../modules/emby-apiclient/connectionmanager.js","./../modules/listview/listview.js","./../modules/prompt/prompt.js"],function(_exports,_basesettingsview,_embyInput,_embyButton,_globalize,_loading,_registrationservices,_connectionmanager,_listview,_prompt){function showAlert(options){Emby.importModule("./modules/common/dialogs/alert.js").then(function(alert){return alert(options)})}function load(page){return _loading.default.show(),(apiClient=ApiClient).getJSON(apiClient.getUrl("Plugins/SecurityInfo")).then(function(info){return page.querySelector(".txtSupporterKey").value=info.SupporterKey||"",info.SupporterKey&&!info.IsMBSupporter?(page.querySelector(".txtSupporterKey").classList.add("invalidEntry"),page.querySelector(".notSupporter").classList.remove("hide")):(page.querySelector(".txtSupporterKey").classList.remove("invalidEntry"),page.querySelector(".notSupporter").classList.add("hide")),info.IsMBSupporter?(page.querySelector(".supporterContainer").classList.add("hide"),function(key){key="key="+key+"&serverId="+ApiClient.serverId();return Promise.resolve({deviceStatus:0,planType:"Lifetime",subscriptions:{}})}(info.SupporterKey).then(function(statusInfo){if(statusInfo){var statusLine,indicator=page.querySelector(".status-indicator .statusIcon"),extendedPlans=page.querySelector(".extended-plans");switch(extendedPlans.innerHTML=_globalize.default.translate("MessagePremiereExtendedPlans",'<a is="emby-linkbutton" class="button-link" href="https://emby.media/premiere-ext.html" target="_blank">',"</a>"),statusInfo.deviceStatus){case 2:statusLine=_globalize.default.translate("MessagePremiereStatusOver",statusInfo.planType),indicator.classList.add("expiredBackground"),indicator.classList.remove("nearExpiredBackground"),indicator.innerHTML="&#xe000;",indicator.classList.add("autortl"),extendedPlans.classList.remove("hide");break;case 1:statusLine=_globalize.default.translate("MessagePremiereStatusClose",statusInfo.planType),indicator.classList.remove("expiredBackground"),indicator.classList.add("nearExpiredBackground"),indicator.innerHTML="&#xe000;",indicator.classList.add("autortl"),extendedPlans.classList.remove("hide");break;default:statusLine=_globalize.default.translate("MessagePremiereStatusGood",statusInfo.planType),indicator.classList.remove("expiredBackground"),indicator.classList.remove("nearExpiredBackground"),indicator.innerHTML="&#xe5CA;",indicator.classList.remove("autortl"),extendedPlans.classList.add("hide")}page.querySelector(".premiere-status").innerHTML=statusLine;var subsElement=page.querySelector(".premiere-subs");statusInfo.subscriptions&&0<statusInfo.subscriptions.length?(page.querySelector(".premiere-subs-content").innerHTML=(subs=statusInfo.subscriptions,key=info.SupporterKey,subs.map(function(item){var itemHtml="",makeLink=(itemHtml=(itemHtml=(itemHtml=(itemHtml=itemHtml+('<div class="listItem listItem-border" data-feature="'+item.feature+'" data-key="'+key+'">')+'<i class="listItemIcon md-icon autortl">&#xe1b2;</i>')+'<div class="listItemBody two-line">'+'<div class="listItemBodyText">')+_globalize.default.translate("ListItemPremiereSub",item.planType,item.expDate,item.store))+"</div>"+'<div class="listItemBodyText listItemBodyText-secondary secondaryText">',item.autoRenew&&"Stripe"===item.store);return makeLink&&(itemHtml+='<a is="emby-linkbutton" class="button-link" href="https://billing.stripe.com/p/login/aEU8zF0oxb0JcxibII" target="_blank">'),itemHtml+=_globalize.default.translate("Stripe"===item.store?item.autoRenew?"LabelClickToManage":"LabelAlreadyCancelled":"LabelCancelInfo",item.store),makeLink&&(itemHtml+="</a>"),itemHtml=(itemHtml+="</div>")+"</div>"+"</div>"})),subsElement.classList.remove("hide")):subsElement.classList.add("hide"),page.querySelector(".isSupporter").classList.remove("hide")}var subs,key;_loading.default.hide()})):(page.querySelector(".supporterContainer").classList.remove("hide"),page.querySelector(".isSupporter").classList.add("hide"),_loading.default.hide(),Promise.resolve())});var apiClient}function retrieveSupporterKey(e){(0,_prompt.default)({title:_globalize.default.translate("HeaderForgotKey"),label:_globalize.default.translate("LabelEmail"),description:_globalize.default.translate("LabelSupporterEmailAddress"),confirmText:_globalize.default.translate("ButtonRetrieveKey")}).then(retrieveSupporterKeyFromEmail)}function retrieveSupporterKeyFromEmail(email){_loading.default.show();var url="https://mb3admin.com/admin/service/supporter/retrievekey?email="+email;console.log(url),fetch(url,{method:"POST"}).then(function(response){return response.json()}).then(function(result){var options;_loading.default.hide(),result.Success?(options=_globalize.default.translate("MessageKeyEmailedTo").replace("{0}",email),Emby.importModule("./modules/toast/toast.js").then(function(toast){return toast(options)})):showAlert(result.ErrorMessage),console.log(result)})}function onSupporterLinkClick(e){_registrationservices.default.showPremiereInfo(),e.preventDefault(),e.stopPropagation()}function View(view,params){_basesettingsview.default.apply(this,arguments),view.querySelector(".supporterKeyForm").addEventListener("submit",function(e){_loading.default.show();var instance=this,key=e.target.querySelector(".txtSupporterKey").value;return ApiClient.updatePluginSecurityInfo({SupporterKey:key}).then(function(){_loading.default.hide(),showAlert(key?{text:_globalize.default.translate("MessageKeyUpdated"),title:_globalize.default.translate("HeaderConfirmation")}:{text:_globalize.default.translate("MessageKeyRemoved"),title:_globalize.default.translate("HeaderConfirmation")}),_connectionmanager.default.resetRegistrationInfo(ApiClient),load(instance.view)},function(){_loading.default.hide(),_connectionmanager.default.resetRegistrationInfo(ApiClient),load(instance.view)}),e.preventDefault(),!1}.bind(this)),view.querySelector(".btnForgotKey").addEventListener("click",retrieveSupporterKey),view.querySelector(".benefits").innerHTML=_globalize.default.translate("HeaderSupporterBenefit",'<a is="emby-linkbutton" class="lnkPremiere button-link" href="https://emby.media/premiere" target="_blank">',"</a>"),view.querySelector(".lnkPremiere").addEventListener("click",onSupporterLinkClick)}Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0,Object.assign(View.prototype,_basesettingsview.default.prototype),View.prototype.loadSettingsInternal=function(options){return load(this.view)};_exports.default=View});
