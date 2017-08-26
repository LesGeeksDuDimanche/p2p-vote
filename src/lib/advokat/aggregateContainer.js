/**
* @module advokat/AggregateContainer
*/

'use strict';

var crypto = require('crypto');
var akConstants = require('./constants');
var akUtils = require('./utils');
var _ = require('lodash');
var assert = require('assert');

class AggregateContainer {
  constructor(options) {
    // from container object
    this.counter = options.counter;
    this.branchDepth = options.branchDepth;
    this.branchID = options.branchID;
    this.childIDs = options.childIDs;
    this.iD = akUtils.getHash(this.toSharable());

    this.sources = options.sources ? options.sources : [];
  }

  toSharable() {
    return {
      counter: this.counter,
      branchDepth: this.branchDepth,
      branchID: this.branchID,
      childIDs: this.childIDs
    }
  }

  static join(childs) {
    var branchID = akUtils.getBranchID(childs[0].branchID, childs[0].branchDepth-1);
    for (let i = 1; i < childs.length; i++) {
      assert(childs[0].branchDepth === childs[i].branchDepth, 'AggregateContainer#join requires equal depth childs');
      assert(branchID === akUtils.getBranchID(childs[i].branchID, childs[i].branchDepth-1), 'AggregateContainer#join requires equal sibling childs');
    }
    var options = {
      counter: _.reduce(_.map(childs, 'counter'), function(sum, n) {return sum+n}, 0),
      branchDepth: childs[0].branchDepth-1,
      branchID: branchID,
      childIDs: _.map(childs, 'iD').sort()
    }
    return new AggregateContainer(options);
  }
}

module.exports = AggregateContainer;
