exports.render = () => {
	return `<form>
		<div class="list">
			<label class="item item-input item-stracked-label">
				<span class="input-label">Nome</span>
				<input type="text" data-name></input>
			</label>
			<label class="item item-input item-stracked-label">
				<span class="input-label">Email</span>
				<input type="text" data-email></input>
			</label>
			<label class="item item-input item-stracked-label">
				<span class="input-label">Senha</span>
				<input type="password" data-password></input>
			</label>
		</div>
		<div class="padding">
			<button class="button button-positive button-block">
				<i class="ion-thumbsup"></i> Cadastrar
			</button>
		</div>
	</form>`;
};