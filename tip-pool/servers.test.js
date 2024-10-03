describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should clear input value after submitServerInfo()', function() {
    submitServerInfo();

    expect(serverNameInput.value).toEqual(''); 
  });

  it('should not add a new server on submitServerInfo() with empty input', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #serverTable with correct row count after updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();

    let curRows = document.querySelectorAll('#serverTable tbody tr');

    expect(curRows.length).toEqual(1); 

    serverNameInput.value = 'Bob';
    submitServerInfo();
    updateServerTable();

    curRows = document.querySelectorAll('#serverTable tbody tr');
    expect(curRows.length).toEqual(2); 
  });

  it('should update #servertable content correctly on updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3); 
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00'); 
    expect(curTdList[2].innerText).toEqual('X'); 
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});