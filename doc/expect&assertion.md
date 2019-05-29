## What's Chai
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Examples
### BDD--Should
> foo.should.be.a('string');</br>
> foo.should.equal('bar');</br>
> foo.should.have.lengthOf(3);</br>
> tea.should.have.property('flavors').with.lengthOf(3);</br>

### BDD--Expect(used)
> expect(foo).to.be.a('string');</br>
> expect(foo).to.equal('bar');</br>
> expect(foo).to.have.lengthOf(3);</br>
> expect(tea).to.have.property('flavors').with.lengthOf(3);</br>

### TDD--Assert
> assert.typeOf(foo, 'string');</br>
> assert.equal(foo, 'bar');</br>
> assert.lengthOf(foo, 3)</br>
> assert.property(tea, 'flavors');</br>
> assert.lengthOf(tea.flavors, 3);</br>

## Chai cheat sheet
> Reference:</br>
> CH https://www.jianshu.com/p/ad59cfd158d4</br>
> EN https://www.chaijs.com/api/bdd/</br>
