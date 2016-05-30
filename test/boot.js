import chai from 'chai';
import sinonChai from 'sinon-chai';
import React from 'react';
import sinon from 'sinon';
import query from 'react-testutils-query';
import render from 'react-testutils-render';

chai.use(sinonChai);

// --- don't use `global` in actual code!!! ---

global.expect = chai.expect;
global.React = React;
global.sinon = sinon;
global.$ = query;
global.render = render;
