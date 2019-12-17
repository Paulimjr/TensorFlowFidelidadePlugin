/**
 * TensorFlowFidelidadePlugin
 * @constructor
 */
function TensorFlowFidelidadePlugin(pluginName) {
    this.version = 1;
    this.pluginName = pluginName;
}

/**
 * Returns tensorflow value
 * 
 * @param modelName the model name of the file already exists
 * @param imagePath the image path with image content
 * @param successCallback
 * @param errorCallback
 */
TensorFlowFidelidadePlugin.prototype.loadModel = function(modelName, imagePath, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'loadModel', [modelName, imagePath]);
};

/**
 * export default TensorFlowFidelidadePlugin
 * @type {TensorFlowFidelidadePlugin}
 */
module.exports = new TensorFlowFidelidadePlugin('TensorFlowFidelidadePlugin');
