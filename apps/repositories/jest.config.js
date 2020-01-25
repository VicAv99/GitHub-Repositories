module.exports = {
  name: 'repositories',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/repositories',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
